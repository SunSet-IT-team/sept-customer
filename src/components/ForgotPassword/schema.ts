import {z} from 'zod';

export const forgotPasswordFormSchema = z.object({
    email: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'})
        .email({message: 'Неверный формат email'}),

    new_password: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'}),
});
