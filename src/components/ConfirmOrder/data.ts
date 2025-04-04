export const newOrderInputsData = [
    {label: 'Дата', name: 'date', required: true, type: 'date'},
    {label: 'Город', name: 'city', required: true},
    {label: 'Услуга', name: 'service', required: true},
    {label: 'Тип оплаты', name: 'payment_type', required: true},
    {label: 'Объект', name: 'object', required: true},
    {label: 'Комментарий', name: 'comment', required: false},
    {label: 'Расстояние до септика', name: 'entrance_distance', required: true},
    {label: 'Высота септика', name: 'septic_height', required: true},
    {label: 'Объем', name: 'volume', required: true},
    {label: 'Тип объекта', name: 'object_type', required: true},
    {label: 'Исполнитель', name: 'executor', required: true},
];

export const paymentTypes = [
    {label: 'Наличные', id: 'cash'},
    {label: 'Безналичный расчет', id: 'wire_transfer'},
];
