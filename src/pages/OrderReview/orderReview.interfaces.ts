export interface IOrderData {
    number: string;
    service: string;
    status: 'Выполнен' | 'Заявка принята';
    date: string;
    payment: 'Наличные' | 'Базналичный расчет';
    address: string;
    comment: string;
    phone: string;
    performer: string;
    volume: string;
    type: string;
}
