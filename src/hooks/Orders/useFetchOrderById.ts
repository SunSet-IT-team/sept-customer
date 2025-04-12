import {useQuery} from '@tanstack/react-query';
import {SERVICES} from '../../api';

export const useFetchOrderById = (id: any) => {
    return useQuery({
        queryFn: () => SERVICES.OrderService.getOrderById(id),
        queryKey: ['get order by id', id],
        enabled: typeof id !== 'undefined',
    });
};
