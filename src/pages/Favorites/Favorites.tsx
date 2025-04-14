import {Box} from '@mui/material';
import {keepPreviousData, useInfiniteQuery} from '@tanstack/react-query';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {useInView} from 'react-intersection-observer';
import {SERVICES} from '../../api';
import {
    ExecutorItemType,
    ExecutorsList,
} from '../../components/ExecutorsList/ExecutorsList';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {Spinner} from '../../components/Spinner/Spinner';
import {mappingServerExecutors} from '../../api/services/executor/mapping/executor';

/**
 * КОСТЫЛЬ - ПЕРЕДЕЛАТЬ
 */
export const Favorites: FC = () => {
    const {ref, inView} = useInView();

    const {data: executors, isLoading} = useInfiniteQuery({
        queryFn: ({pageParam}) =>
            SERVICES.ExecutorService.getAllExecutors({page: pageParam}),
        queryKey: ['get all favorite executors'],
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
                <ExecutorsList
                    itemType={ExecutorItemType.FAVORITE}
                    executors={executors}
                    observedRef={ref}
                />
            </Box>
        </Box>
    );
};
