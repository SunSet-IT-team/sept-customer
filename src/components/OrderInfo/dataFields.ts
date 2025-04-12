
import { IOrderShortInfo } from "../../types/order";

export const dataFields: [label: string, key: keyof IOrderShortInfo][] = [
    ['Дата', "date"],
    ['Услуга', "type"],
    ['Статус', "status"],
    ['Исполнитель', "executor"],
];
