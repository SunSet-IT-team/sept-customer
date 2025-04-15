import {IOrder} from '../../types/order';

export const dataFields: [label: string, key: keyof IOrder][] = [
    ['Дата', 'date'],
    ['Услуга', 'type'],
    ['Статус', 'status'],
    ['Исполнитель', 'executor'],
];
