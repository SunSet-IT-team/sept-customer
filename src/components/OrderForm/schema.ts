import {z} from 'zod';

export const newOrderFormSchema = z.object({
    date: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
    city: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
    payment_type: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'}),
    object: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
    comment: z.string(),
    entrance_distance: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'}),
    septic_height: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'}),
    volume: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
    object_type: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'}),
});

export type TNewOrderForm = z.infer<typeof newOrderFormSchema>;
