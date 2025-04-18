import {IExecutor, IReview} from './executor';
import {IService} from './service';

/**
 * Заказ
 */
export interface IOrder {
    address: string;
    executor?: IExecutor;
    comment?: string;
    payment: OrderPaymentType;
    id: string;
    date: string;
    orderName: string;
    status: OrderStatus;
    service?: IService;
    review?: IReview;
    volume: string;
    septicDepth: string;
    distanceToSeptic: string;
    type: string;
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
     * Заявка отменена
     */
    REJECTED = 'REJECTED',
}
