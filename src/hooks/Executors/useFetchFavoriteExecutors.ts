import {useInfiniteQuery, keepPreviousData} from '@tanstack/react-query';
import {SERVICES} from '../../api';
import {mappingServerExecutors} from '../../api/services/executor/mapping/executor';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

/**
 * Бесконечно получать исполнителей
 */
export const useFetchFavoriteExecutors = () => {
    const {ref, inView} = useInView();

    const {
        data: executors,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isSuccess,
    } = useInfiniteQuery({
        queryFn: ({pageParam}) =>
            SERVICES.FavoriteService.getFavorites({page: pageParam}),
        queryKey: ['executor favorite'],
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

    useEffect(() => {
        if (inView && hasNextPage && !isLoading) {
            fetchNextPage();
        }
    }, [inView, isSuccess, hasNextPage, fetchNextPage]);

    return {executors, isLoading, ref};
};
