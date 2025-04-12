import {OrderStatus} from '../../types/order';

export interface IOrderData {
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
