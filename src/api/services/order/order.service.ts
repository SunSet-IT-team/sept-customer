import {API_ROUTES} from '../..';
import {ordersData} from '../../../pages/MyOrders/data';
import {ordersWithReviewData} from '../../../pages/MyReviews/data';
import axiosInstance from '../../instance';
import {ICreateOrderDTO, ICreateOrderResponse} from './dto/createOrder.dto';

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

    async getUserOrders() {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        return ordersData;
    },

    async getOrderById(id: any) {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        return ordersData.find((order) => order.id === id);
    },
};
