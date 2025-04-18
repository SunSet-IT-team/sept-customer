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

/**
 * Просклонять слово "отзывов"
 */
export const getReviewsWord = (count: number): string => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return 'отзывов';
    }

    if (lastDigit === 1) {
        return 'отзыв';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'отзыва';
    }

    return 'отзывов';
};
