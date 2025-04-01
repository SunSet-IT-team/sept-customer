export const forgotPasswordInputsData = [
    {
        label: 'E-mail',
        name: 'email',
        required: true,
        errorText: 'Поле обязательно для заполнения',
    },

    {
        label: 'Новый пароль',
        name: 'new_password',
        required: true,
        errorText: 'Поле обязательно для заполнения',
        type: 'password',
    },
];

export const forgotPasswordDefaultValues = {
    email: '',
    new_password: '',
};
