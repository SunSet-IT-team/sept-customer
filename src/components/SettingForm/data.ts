import {SettingFormData} from './schema';

export const settingFormData = [
    {
        label: 'Наименование',
        name: 'name',
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
        label: 'Email',
        name: 'email',
        required: true,
        errorText: 'Поле обязательно для заполнения',
    },

    {
        label: 'Новый пароль',
        name: 'newPassword',
        required: true,
        errorText: 'Поле обязательно для заполнения',
        type: 'password',
    },
];

export const settingFormDefaultValues: SettingFormData = {
    name: '',
    phone: '',
    email: '',
    newPassword: '',
    profileImage: undefined as unknown as File, // заглушка
    addresses: [{value: ''}],
};
