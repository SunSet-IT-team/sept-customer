import {keepPreviousData, useInfiniteQuery} from '@tanstack/react-query';
import {SERVICES} from '../../api';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import {mappingServerReview} from '../../api/services/order/mapping/review';

/**
 * Получение всех отзывов пользователя
 */
export const useFetchReviews = () => {
    const {ref, inView} = useInView();

    const {
        data: reviews,
        isLoading: isFirstLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        isSuccess,
    } = useInfiniteQuery({
        queryFn: ({pageParam}) =>
            SERVICES.OrderService.getReviews({page: pageParam}),
        queryKey: ['reviews'],
        initialPageParam: 1,
        placeholderData: keepPreviousData,
        getNextPageParam: (data) => {
            let nextPage = data.data.page + 1;
            if (nextPage > data.data.pages) nextPage = null;

            return nextPage;
        },
        select: (data) =>
            data.pages.flatMap((page) => {
                return page.data.items.map((el) => mappingServerReview(el));
            }),
    });

    const isLoading = isFirstLoading || isFetchingNextPage;

    useEffect(() => {
        if (inView && hasNextPage && !isLoading) {
            fetchNextPage();
        }
    }, [inView, isSuccess, hasNextPage, fetchNextPage, isLoading]);

    return {reviews, isLoading, ref};
};
