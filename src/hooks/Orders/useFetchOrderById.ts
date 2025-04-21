import {useQuery} from '@tanstack/react-query';
import {SERVICES} from '../../api';
import {mappingServerOrder} from '../../api/services/order/mapping/order';

/**
 * Получение конкретного заказа пользователя
 */
export const useFetchOrderById = (id: any) => {
    return useQuery({
        queryFn: () => SERVICES.OrderService.getOrderById(id),
        queryKey: ['order', id],
        staleTime: 0, // всегда считается "протухшим"
        refetchOnWindowFocus: true,
        select(data) {
            return mappingServerOrder(data.data);
        },
    });
};
