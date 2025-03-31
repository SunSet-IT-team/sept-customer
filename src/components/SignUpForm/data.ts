export const signUpInputsData = [
    {
        label: 'ФИО',
        name: 'fullname',
        required: true,
        errorText: 'Поле обязательно для заполнения',
    },
    {
        label: 'E-mail',
        name: 'email',
        required: true,
        errorText: 'Поле обязательно для заполнения',
    },
    {
        label: 'Телефон',
        name: 'phone',
        required: true,
        errorText: 'Поле обязательно для заполнения',
    },
    {
        label: 'Пароль',
        name: 'password',
        required: true,
        errorText: 'Поле обязательно для заполнения',
        type: 'password',
    },
];

export const signUpDefaultsValues = {
    fullname: '',
    email: '',
    phone: '',
    password: '',
    processingDataAccepted: false,
};
