import {IOrder, OrderStatus} from '../../types/order';

export const ordersData: IOrder[] = [
    {
        id: '39-18',
        date: '23.05.2024',
        orderName: 'сборка септика',
        status: OrderStatus.IN_PROGRESS,
    },
    {
        id: '39-19',
        date: '23.05.2024',
        orderName: 'сборка септика',
        status: OrderStatus.COMPLETED,
    },
    {
        id: '39-20',
        date: '23.05.2024',
        orderName: 'сборка септика',
        status: OrderStatus.COMPLETED,
        review: {
            rating: 4,
            text: 'Работой компании остался очень доволен. Приятное общение, пунктуально. К работе меня не привлекали. Предоставил шланги, через 1,5 часа все было закончено. Септик блестит как новый. ',
        },
    },
];
