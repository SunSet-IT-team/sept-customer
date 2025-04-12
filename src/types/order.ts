import {IOrderReview} from './review';

export interface IOrder {
    id: string;
    date: string;
    orderName: string;
    status: OrderStatus;
    review?: IOrderReview;
}

export enum OrderStatus {
    /**
     * В работе
     */
    IN_PROGRESS = 'В работе',
    /**
     * Выполнен
     */
    COMPLETED = 'Выполнен',
    /**
     * Заявка принята
     */
    CONFIRMED = 'Заявка принята',
}
