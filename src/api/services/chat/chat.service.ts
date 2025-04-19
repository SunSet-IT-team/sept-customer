import {API_ROUTES} from '../..';
import axiosInstance from '../../instance';
import {IGetAdminChat, IGetOrderChat} from './dto/dto';

/**
 * API по работе с чатами
 */
export const ChatService = {
    /**
     * Получить чат по заказу
     */
    async getOrderChat(orderId: string | number) {
        const url = `${API_ROUTES.CHAT_ORDER(orderId)}`;

        const response = await axiosInstance<IGetOrderChat>({
            url: url,
            method: 'GET',
        });

        return response.data;
    },

    /**
     * Получить чат с поддержкой
     */
    async getAdminChat(theme?: string) {
        const response = await axiosInstance<IGetAdminChat>({
            url: API_ROUTES.CHAT_SUPPORT(),
            method: 'POST',
            data: {
                theme,
            },
        });

        return response.data;
    },
};
