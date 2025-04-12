import { IOrderFullInfo } from "../../../types/order";

export const dataFields: [label: string, key: keyof IOrderFullInfo][] = [
    ['Дата', 'date'],
    ['Форма оплаты', 'payment'],
    ['Объект', 'address'],
    ['Комментарий', 'comment'],
    ['Телефон', 'phone'],
    ['Исполнитель', 'performer'],
    ['Объем', 'volume'],
    ['Вид сооружения', 'type'],
];
