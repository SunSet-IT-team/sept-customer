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

/**
 * КОСТЫЛЬ - ПЕРЕДЕЛАТЬ
 */
export const Favorites: FC = () => {
    const {ref, inView} = useInView();

    const {data: executors, isLoading} = useInfiniteQuery({
        queryFn: ({pageParam}) =>
            SERVICES.ExecutorService.getAllExecutors({page: pageParam}),
        queryKey: ['get all exxecutors'],
        initialPageParam: 1,
        placeholderData: keepPreviousData,
        getNextPageParam: ({nextPage}) => nextPage,
        select: (data) => data.pages.flatMap((page) => page.items),
    });

    if (isLoading || !executors) {
        return <Spinner />;
    }
    return (
        <Box px={'20px'} py={'26px'}>
            <Helmet>
                <title>Избранное</title>
            </Helmet>
            <PageTitle title="Избранное" />
            <Box mt={'50px'}>
                <ExecutorsList executors={executors} observedRef={ref} />
            </Box>
        </Box>
    );
};
