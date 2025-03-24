import {z} from 'zod';

const phoneRegex = /(^8|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;
const onlyDigitsRegex = /^\+?\d+$/;

const cleanPhoneNumber = (phone: string) => {
    return phone.replace(/[\(\)\-\s]/g, ''); // Убираем скобки, дефисы и пробелы
};

export const signUpFormSchema = z.object({
    fullname: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
    email: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'})
        .email({message: 'Неверный формат email'}),
    phone: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'})
        .transform(cleanPhoneNumber)
        .refine((phone) => onlyDigitsRegex.test(phone), {
            // Проверка, что номер состоит только из цифр
            message: 'Номер телефона должен содержать только цифры',
        })
        .refine((phone) => phoneRegex.test(phone), {
            message: 'Введите корректный российский номер телефона',
        }),
    password: z
        .string()
        .min(6, {message: 'Пароль должен содержать минимум 6 символов'}),
    processingDataAccepted: z.boolean().refine((value) => value === true, {
        message: 'Поле обязательно для заполнения',
    }),
});
