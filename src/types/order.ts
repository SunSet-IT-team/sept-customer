import {IExecutor} from './executor';
import {IOrderReview} from './review';

/**
 * Экран - просмотр заказа
 */
export interface IOrderFullInfo {
    number: string;
    service: string;
    status: OrderStatus;
    date: string;
    payment: OrderPaymentType;
    address: string;
    comment: string;
    phone: string;
    performer: string;
    volume: string;
    type: string;
}

/**
 * Экран - мои заказы
 */
export interface IOrder {
    id: string;
    date: string;
    orderName: string;
    status: OrderStatus;
    review?: IOrderReview;
}

/**
 * Экран - новый отзыв
 */
export interface IOrderShortInfo {
    date: string;
    type: string;
    status: OrderStatus;
    executor: string;
}

/**
 * Экран - мои отзывы
 */
export interface IOrderWithReview {
    id: IOrder['id'];
    name: IOrder['orderName'];
    date: IOrder['date'];
    address: string;
    review: IOrderReview;
}

export interface IOrderWithReviewData {
    orderWithReview: IOrderWithReview;
    executor: IExecutor;
    isFavourite: boolean;
}

/**
 * Виды оплаты заказа
 */
export enum OrderPaymentType {
    /**
     * Наличные
     */
    CASH = 'Наличные',
    /**
     * Базналичный расчет
     */
    CARD = 'Базналичный расчет',
}

/**
 * Статусы заказа
 */
export enum OrderStatus {
    /**
     * В ожидании
     */
    PENDING = 'PENDING',

    /**
     * В работе
     */
    IN_PROGRESS = 'IN_PROGRESS',

    /**
     * Выполнен
     */
    COMPLETED = 'COMPLETED',

    /**
     * Заявка принята
     */
    CONFIRMED = 'CONFIRMED',

    /**
     * Заявка отменена
     */
    REJECTED = 'REJECTED',
}
