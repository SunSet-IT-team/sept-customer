import { OrderStatus } from '../../types/order';
import {IOrderData, OrderPaymentType} from './orderReview.interfaces';

export const data: IOrderData = {
    number: '38-19',
    service: 'Сборка септика',
    status: OrderStatus.COMPLETED,
    date: '24.05.2025',
    payment: OrderPaymentType.CASH,
    address: 'Садовая, д.7',
    comment: 'нужно сегодня',
    phone: '+74930968484',
    performer: 'ООО Септик',
    volume: '1.5 м.куб.',
    type: 'СептоБак БИО',
};
