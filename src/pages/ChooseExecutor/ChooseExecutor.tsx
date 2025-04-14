import {Box} from '@mui/material';
import {keepPreviousData, useInfiniteQuery} from '@tanstack/react-query';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useInView} from 'react-intersection-observer';
import {useNavigate} from 'react-router-dom';
import {SERVICES} from '../../api';
import {ExecutorsList} from '../../components/ExecutorsList/ExecutorsList';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {Spinner} from '../../components/Spinner/Spinner';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {mappingServerExecutors} from '../../api/services/executor/mapping/executor';
export const ChooseExecutor: FC = () => {
    const {ref, inView} = useInView();

    const {
        data: executors,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isSuccess,
    } = useInfiniteQuery({
        queryFn: ({pageParam}) =>
            SERVICES.ExecutorService.getAllExecutors({page: pageParam}),
        queryKey: ['get all executors'],
        initialPageParam: 1,
        placeholderData: keepPreviousData,
        getNextPageParam: (data) => {
            let nextPage = data.data.page + 1;
            if (nextPage > data.data.pages) nextPage = null;

            return nextPage;
        },
        select: (data) =>
            data.pages.flatMap((page) => {
                return page.data.items.map((el) => mappingServerExecutors(el));
            }),
    });

    const navigate = useNavigate();
    const {formData} = useTypedSelector((state) => state.newOrderForm);

    useEffect(() => {
        if (!formData) {
            navigate('/');
        }
    }, [formData, navigate]);

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, isSuccess, hasNextPage, fetchNextPage]);

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
