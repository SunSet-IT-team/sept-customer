import {
    keepPreviousData,
    useInfiniteQuery,
    useQuery,
} from '@tanstack/react-query';
import {SERVICES} from '../../api';
import {mappingServerOrder} from '../../api/services/order/mapping/order';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';

/**
 * Получение всех заказов пользователя
 */
export const useFetchOrders = () => {
    const {ref, inView} = useInView();

    const {
        data: orders,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isSuccess,
    } = useInfiniteQuery({
        queryFn: ({pageParam}) =>
            SERVICES.OrderService.getUserOrders({page: pageParam}),
        queryKey: ['get all user orders'],
        initialPageParam: 1,
        placeholderData: keepPreviousData,
        getNextPageParam: (data) => {
            let nextPage = data.data.page + 1;
            if (nextPage > data.data.pages) nextPage = null;

            return nextPage;
        },
        select: (data) =>
            data.pages.flatMap((page) => {
                return page.data.items.map((el) => mappingServerOrder(el));
            }),
    });

    useEffect(() => {
        if (inView && hasNextPage && !isLoading) {
            fetchNextPage();
        }
    }, [inView, isSuccess, hasNextPage, fetchNextPage]);

    return {orders, isLoading, ref};
};
