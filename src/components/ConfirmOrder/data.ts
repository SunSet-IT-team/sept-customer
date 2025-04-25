export const newOrderInputsData = [
    {label: 'Дата', name: 'date', required: true, type: 'date'},
    {label: 'Город', name: 'city', required: true},
    {label: 'Услуга', name: 'service', required: true},
    {label: 'Форма оплаты', name: 'payment_type', required: true},
    {label: 'Объект', name: 'object', required: true},
    {label: 'Комментарий', name: 'comment', required: false},
    {
        label: 'Расстояние до септика от подъезда (м)',
        name: 'entrance_distance',
        required: true,
    },
    {
        label: 'Глубина септика до дна (м)',
        name: 'septic_height',
        required: true,
    },
    {label: 'Объем септика (м³)', name: 'volume', required: true},
    {label: 'Вид очистного сооружения', name: 'object_type', required: true},

    {label: 'Адрес', name: 'address', required: true},
    {label: 'Исполнитель', name: 'executor', required: true},
];

export const paymentTypes = [
    {label: 'Наличные', id: 'Наличные'},
    {label: 'Безналичный расчет', id: 'Безналичный расчет'},
];
