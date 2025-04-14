export const newOrderInputsData = [
    {label: 'Дата', name: 'date', required: true, type: 'date'},
    {label: 'Тип оплаты', name: 'payment_type', required: true},
    {label: 'Объект', name: 'object', required: true},
    {label: 'Город', name: 'city', required: true},
    {label: 'Комментарий', name: 'comment', required: false},
    {label: 'Расстояние до септика', name: 'entrance_distance', required: true},
    {label: 'Высота септика', name: 'septic_height', required: true},
    {label: 'Объем', name: 'volume', required: true},
    {label: 'Тип объекта', name: 'object_type', required: true},
];

export const paymentTypes = [
    {label: 'Наличные', id: 'Наличные'},
    {label: 'Безналичный расчет', id: 'Безналичный расчет'},
];

export const newOrderDefaultValues = {
    comment: '',
    date: '',
    entrance_distance: '',
    object: '',
    object_type: '',
    payment_type: '',
    septic_height: '',
    volume: '',
    city: '',
};
