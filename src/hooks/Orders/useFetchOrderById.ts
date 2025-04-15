import {useQuery} from '@tanstack/react-query';
import {SERVICES} from '../../api';
import {mappingServerOrder} from '../../api/services/order/mapping/order';

/**
 * Получение конкретного заказа пользователя
 */
export const useFetchOrderById = (id: any) => {
    return useQuery({
        queryFn: () => SERVICES.OrderService.getOrderById(id),
        queryKey: ['get order by id', id],
        select(data) {
            return mappingServerOrder(data.data);
        },
    });
};
