import {Box} from '@mui/material';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';
import {ExecutorsList} from '../../components/ExecutorsList/ExecutorsList';
import {Spinner} from '../../components/Spinner/Spinner';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useFetchExecutors} from '../../hooks/Executors/useFetchExecutors';
import {BackLayout} from '../layouts/BackLayout';

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
        <>
            <Helmet>
                <title>Выбрать исполнителя</title>
            </Helmet>
            <BackLayout title="Выбрать исполнителя">
                <Box sx={{flexGrow: 1}}>
                    <ExecutorsList executors={executors} observedRef={ref} />
                </Box>
            </BackLayout>
        </>
    );
};
