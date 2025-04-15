import {IOrder} from '../../../types/order';

export const dataFields: [label: string, key: keyof IOrder][] = [
    ['Дата', 'date'],
    ['Форма оплаты', 'payment'],
    ['Объект', 'address'],
    ['Комментарий', 'comment'],
    ['Объем', 'volume'],
    ['Вид сооружения', 'type'],
];
