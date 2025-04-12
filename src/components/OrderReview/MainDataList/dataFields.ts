import {IOrderData} from '../../../pages/OrderReview/orderReview.interfaces';

export const dataFields: [label: string, key: keyof IOrderData][] = [
    ['Дата', 'date'],
    ['Форма оплаты', 'payment'],
    ['Объект', 'address'],
    ['Комментарий', 'comment'],
    ['Телефон', 'phone'],
    ['Исполнитель', 'performer'],
    ['Объем', 'volume'],
    ['Вид сооружения', 'type'],
];
