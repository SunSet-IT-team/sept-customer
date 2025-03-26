import {Search} from '@mui/icons-material';
import {Box, InputAdornment, TextField, Typography} from '@mui/material';
import {FC, useMemo, useState} from 'react';
import {ServicesList} from '../../components/ServicesList/ServicesList';
import {servicesListData} from './data';
export const Home: FC = () => {
    const [search, setSearch] = useState<string>('');
    const filteredServices = useMemo(() => {
        return servicesListData.filter((service) =>
            service.title.includes(search.toLowerCase())
        );
    }, [search]);
    return (
        <Box mt={'50px'}>
            <TextField
                id="outlined-basic"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                variant="outlined"
                fullWidth
                type="text"
                placeholder="Найти услугу..."
                sx={{
                    '& .MuiInputBase-input': {
                        padding: '10px',
                        '::placeholder': {
                            color: 'black',
                            opacity: 1,
                            fontStyle: 'italic',
                            textAlign: 'center',
                        },
                    },
                    '& .MuiInputAdornment-root': {
                        height: '100%',
                    },
                }}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                sx={{height: '100%'}}
                            >
                                <Box
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'primary.main',
                                        padding: 1.1,
                                        marginRight: '-13px',
                                        borderRadius: '10px',
                                    }}
                                >
                                    <Search sx={{color: 'white'}} />
                                </Box>
                            </InputAdornment>
                        ),
                    },
                }}
            />

            <Typography
                variant="h5"
                fontWeight={'bold'}
                textAlign={'center'}
                my={'28px'}
            >
                Наши услуги
            </Typography>
            <ServicesList servicesList={filteredServices} />
        </Box>
    );
};
