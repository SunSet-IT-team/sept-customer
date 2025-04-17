import {OrderStatus} from '../../types/order';

/**
 * Словарь статусов заказа и значений на русском языке
 */
export const orderStatusDictionary = {
    [OrderStatus.COMPLETED]: 'Завершён',
    [OrderStatus.REJECTED]: 'Отменён',
    [OrderStatus.IN_PROGRESS]: 'В работе',
    [OrderStatus.PENDING]: 'В ожидании',
};
