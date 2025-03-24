import {z} from 'zod';

const phoneRegex = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;
export const signUpFormSchema = z.object({
    fullname: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
    email: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'})
        .email({message: 'Неверный формат email'}),
    phone: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'})
        .regex(phoneRegex, {
            message: 'Введите российский номер телефона в формате +79181234567',
        }),
    password: z
        .string()
        .min(6, {message: 'Пароль должен содержать минимум 6 символов'}),
    processingDataAccepted: z.boolean().refine((value) => value === true, {
        message: 'Поле обязательно для заполнения',
    }),
});
