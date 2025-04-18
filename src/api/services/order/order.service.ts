import {API_ROUTES} from '../..';
import {ordersWithReviewData} from '../../../pages/MyReviews/data';
import axiosInstance from '../../instance';
import {IAddReviewDTO, IAddReviewResponse} from './dto/addReview.dto';
import {IChangeReviewDTO} from './dto/changeReview.dto';
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

    /**
     * Добавить отзыв
     */
    async addReview(id: number | string, params: IAddReviewDTO) {
        const response = await axiosInstance<IAddReviewResponse>({
            url: API_ROUTES.ADD_REVIEW(id),
            method: 'POST',
            data: params,
        });

        return response.data;
    },

    /**
     * Удалить отзыв
     */
    async deleteReview(id: number | string) {
        const response = await axiosInstance<IAddReviewResponse>({
            url: API_ROUTES.DELETE_REVIEW(id),
            method: 'DELETE',
        });

        return response.data;
    },

    /**
     * Изменить отзыв
     */
    async changeReview(id: number | string, params: IChangeReviewDTO) {
        const response = await axiosInstance<IAddReviewResponse>({
            url: API_ROUTES.CHANGE_REVIEW(id),
            method: 'PATCH',
            params,
        });

        return response.data;
    },
};
