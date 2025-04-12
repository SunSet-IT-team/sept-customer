import {useQuery} from '@tanstack/react-query';
import {SERVICES} from '../../api';

/**
 * Получение отзывов вместе с информацией о заказах,
 * на которые пользователь оставил этот отзыв
 */
export const useFetchOrdersWithReview = () => {
    return useQuery({
        queryFn: () => SERVICES.OrderService.getUserOrdersWithReview(),
        queryKey: ['get all user orders with review'],
    });
};
