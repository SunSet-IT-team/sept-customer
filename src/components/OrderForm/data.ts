export const newOrderInputsData = [
    {label: 'Дата', name: 'date', required: true, type: 'date'},
    {label: 'Тип оплаты', name: 'payment_type', required: true},
    {label: 'Объект', name: 'object', required: true},
    {label: 'Город', name: 'city', required: true},
    {label: 'Комментарий', name: 'comment', required: false},
    {
        label: 'Расстояние до септика (м)',
        name: 'entrance_distance',
        required: true,
        type: 'float',
    },
    {
        label: 'Высота септика (м)',
        name: 'septic_height',
        required: true,
        type: 'float',
    },
    {label: 'Объем (м³)', name: 'volume', required: true, type: 'float'},
    {label: 'Тип объекта', name: 'object_type', required: true},
    {label: 'Адрес', name: 'address', required: true},
];

export const paymentTypes = [
    {label: 'Наличные', id: 'Наличные'},
    {label: 'Безналичный расчет', id: 'Безналичный расчет'},
];

export const newOrderDefaultValues = {
    comment: '',
    date: '',
    entrance_distance: 0,
    object: '',
    address: '',
    object_type: '',
    payment_type: '',
    septic_height: 0,
    volume: 0,
    city: '',
};
