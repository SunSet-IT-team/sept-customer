import {Search} from '@mui/icons-material';
import {Box, InputAdornment, TextField, Typography} from '@mui/material';
import {useQuery} from '@tanstack/react-query';
import {FC, useMemo, useState} from 'react';
import {SERVICES} from '../../api';
import {ServicesList} from '../../components/ServicesList/ServicesList';
import {Spinner} from '../../components/Spinner/Spinner';
export const Home: FC = () => {
    const [search, setSearch] = useState<string>('');
    const {data: servicesList, isLoading} = useQuery({
        queryFn: () => SERVICES.ServicesService.getAllServices(),
        queryKey: ['get all services'],
    });

    const filteredServices = useMemo(() => {
        return servicesList?.filter((service) =>
            service.title.toLowerCase().includes(search.toLowerCase().trim())
        );
    }, [search, servicesList]);

    if (isLoading || !servicesList || !servicesList.length) {
        return <Spinner />;
    }

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
            {filteredServices && (
                <ServicesList servicesList={filteredServices} />
            )}
        </Box>
    );
};
