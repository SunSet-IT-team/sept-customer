import {Search} from '@mui/icons-material';
import {Box, InputAdornment, TextField, Typography} from '@mui/material';
import {useQuery} from '@tanstack/react-query';
import {FC, useMemo, useState} from 'react';
import {SERVICES} from '../../api';
import {ServicesList} from '../../components/ServicesList/ServicesList';
import {Spinner} from '../../components/Spinner/Spinner';
import {mappginServerService} from '../../api/services/services/mapping/service';
import {useStyles} from './styles';
import {InputSearch} from '../../components/ui/Inputs/InputSearch';
export const Home: FC = () => {
    const [search, setSearch] = useState<string>('');
    const styles = useStyles();

    const {data: servicesList, isLoading} = useQuery({
        queryFn: () => SERVICES.ServicesService.getAllServices(),
        queryKey: ['get all services'],
        select: (data) => {
            return data.data.items.map((el) => mappginServerService(el));
        },
    });

    const filteredServices = useMemo(() => {
        return servicesList?.filter((service) =>
            service.name.toLowerCase().includes(search.toLowerCase().trim())
        );
    }, [search, servicesList]);

    if (isLoading || !servicesList) {
        return <Spinner />;
    }

    return (
        <Box sx={styles.container}>
            <InputSearch onChange={setSearch} value={search} />

            <Typography variant="h5" sx={styles.title}>
                Наши услуги
            </Typography>
            {filteredServices && (
                <ServicesList servicesList={filteredServices} />
            )}
        </Box>
    );
};
