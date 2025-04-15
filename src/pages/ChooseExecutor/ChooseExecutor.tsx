import {Box} from '@mui/material';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';
import {ExecutorsList} from '../../components/ExecutorsList/ExecutorsList';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {Spinner} from '../../components/Spinner/Spinner';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useFetchExecutors} from '../../hooks/Executors/useFetchExecutors';

/**
 * Лист выбора исполнителей
 */
export const ChooseExecutor: FC = () => {
    const navigate = useNavigate();
    const {formData} = useTypedSelector((state) => state.newOrderForm);

    const {executors, isLoading, ref} = useFetchExecutors();

    useEffect(() => {
        if (!formData) {
            navigate('/');
        }
    }, [formData, navigate]);

    if (isLoading || !executors) {
        return <Spinner />;
    }
    return (
        <Box px={'20px'} py={'26px'}>
            <Helmet>
                <title>Выбрать исполнителя</title>
            </Helmet>
            <PageTitle title="Выбрать исполнителя" />
            <Box mt={'50px'}>
                <ExecutorsList executors={executors} observedRef={ref} />
            </Box>
        </Box>
    );
};
