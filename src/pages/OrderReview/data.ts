import {OrderStatus} from '../../types/order';
import {IOrder, OrderPaymentType} from '../../types/order';

export const data: IOrder = {
    id: '7',
    service: {
        id: '1',
        name: 'test',
        priority: 100,
    },
    status: OrderStatus.COMPLETED,
    date: '24.05.2025',
    payment: OrderPaymentType.CASH,
    address: 'Садовая, д.7',
    comment: 'нужно сегодня',
    executor: null,
    volume: '1.5 м.куб.',
    orderName: 'Название заказа',
    distanceToSeptic: '100',
    septicDepth: '100',
    review: null,
    type: 'СептоБак БИО',
};
