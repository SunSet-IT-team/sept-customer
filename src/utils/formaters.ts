import {IOrder, OrderStatus} from '../types/order';
import {orderStatusDictionary} from './data/dictionary';

/**
 * Красивый отформатированный статус заказа
 */
export const formatOrderStatus = (orderStatus: OrderStatus) => {
    return orderStatusDictionary[orderStatus];
};

/**
 * Получить текст для кнопки
 */
export const formatOrderStatusButton = (order: IOrder) => {
    if (!order.review && order.status == OrderStatus.COMPLETED)
        return 'Оценить';

    if (order.status == OrderStatus.IN_PROGRESS) return 'Обсудить';

    return 'Посмотреть';
};
