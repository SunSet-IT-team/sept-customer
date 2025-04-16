import {API_ROUTES} from '../..';
import {ordersWithReviewData} from '../../../pages/MyReviews/data';
import axiosInstance from '../../instance';
import {ICreateOrderDTO, ICreateOrderResponse} from './dto/createOrder.dto';
import {IGetOrderResponse} from './dto/getOrder.dto';
import {IGetOrdersDTO, IGetOrdersResponse} from './dto/getOrders.dto';

export const OrderService = {
    /**
     * Создать заказ
     */
    async createOrder(param: ICreateOrderDTO) {
        const response = await axiosInstance<ICreateOrderResponse>({
            url: API_ROUTES.ORDER(),
            method: 'POST',
            data: param,
        });

        return response.data;
    },

    async getUserOrdersWithReview() {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        return ordersWithReviewData;
    },

    /**
     * Получить все созданные заказы
     */
    async getUserOrders(data: IGetOrdersDTO) {
        const page = data.page || 1;
        const limit = data.limit || 10;
        const url = `${API_ROUTES.ORDER_MY()}?page=${page}&limit=${limit}`;

        const response = await axiosInstance<IGetOrdersResponse>({
            url,
            method: 'GET',
        });
        return response.data;
    },

    /**
     * Получить заказ по id
     */
    async getOrderById(id: number | string) {
        const response = await axiosInstance<IGetOrderResponse>({
            url: API_ROUTES.ORDER_BY_ID(id),
            method: 'GET',
        });

        return response.data;
    },
};
