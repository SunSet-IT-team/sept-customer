import {Box} from '@mui/material';
import {useQuery} from '@tanstack/react-query';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';
import {SERVICES} from '../../api';
import {ExecutorsList} from '../../components/ExecutorsList/ExecutorsList';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {Spinner} from '../../components/Spinner/Spinner';
import {useTypedSelector} from '../../hooks/useTypedSelector';

export const ChooseExecutor: FC = () => {
    const {data: executors, isLoading} = useQuery({
        queryFn: () => SERVICES.ExecutorService.getAllExecutors(),
        queryKey: ['get all exxecutors'],
    });
    const navigate = useNavigate();
    const {formData} = useTypedSelector((state) => state.newOrderForm);
    useEffect(() => {
        if (!formData) {
            navigate('/');
        }
    }, [formData]);

    if (isLoading || !executors || !executors.length) {
        return <Spinner />;
    }
    return (
        <Box px={'20px'} py={'26px'}>
            <Helmet>
                <title>Выбрать исполнителя</title>
            </Helmet>
            <PageTitle title="Выбрать исполнителя" />
            <Box mt={'50px'}>
                <ExecutorsList executors={executors} />
            </Box>
        </Box>
    );
};
