import {useQuery} from '@tanstack/react-query';
import {SERVICES} from '../../api';

/**
 * Получение одного конкретного заказа по id
 * c динамическим добавлением
 */
export const useFetchChatOrder = (orderId: number | string) => {
    return useQuery({
        queryFn: () => SERVICES.ChatService.getOrderChat(orderId),
        queryKey: ['chatOrder', `${orderId}`],
    });
};
