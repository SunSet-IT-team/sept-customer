import {useQuery} from '@tanstack/react-query';
import {SERVICES} from '../../api';

export const useFetchOrders = () => {
    return useQuery({
        queryFn: () => SERVICES.OrderService.getUserOrders(),
        queryKey: ['get all user orders'],
    });
};
