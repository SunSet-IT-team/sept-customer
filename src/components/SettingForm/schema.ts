import {z} from 'zod';
import {cleanPhoneNumber, onlyDigitsRegex, phoneRegex} from '../../utils/regex';

const addressSchema = z.object({
    id: z.number().optional(),
    value: z.string().min(1, 'Адрес обязателен'),
});

export const settingFormSchema = z.object({
    name: z.string().min(1, 'Обязательное поле'),
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
    email: z.string().email('Некорректный email'),
    newPassword: z
        .string()
        .min(8, {message: 'Пароль должен содержать минимум 8 символов'})
        .optional()
        .or(z.literal('')),
    profileImage: z.instanceof(File, {
        message: 'Необходимо загрузить изображение',
    }),

    addresses: z.array(addressSchema).min(1, 'Добавьте хотя бы один адрес'),
});

export type SettingFormData = z.infer<typeof settingFormSchema>;
