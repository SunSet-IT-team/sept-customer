import {z} from 'zod';

export const newOrderFormSchema = z.object({
    date: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
    city: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
    payment_type: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'}),
    object: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
    comment: z.string(),
    entrance_distance: z.coerce
        .number({
            invalid_type_error: 'Введите число',
        })
        .positive('Дистанция должна быть больше нуля'),
    septic_height: z.coerce
        .number({
            invalid_type_error: 'Введите число',
        })
        .positive('Высота должна быть больше нуля'),
    volume: z.coerce
        .number({
            invalid_type_error: 'Введите число',
        })
        .positive('Объем должен быть больше нуля'),
    object_type: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'}),
    address: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
});

export interface INewOrderForm extends z.infer<typeof newOrderFormSchema> {}
