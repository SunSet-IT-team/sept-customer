import {z} from 'zod';

export const signInFormSchema = z.object({
    email: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'})
        .email({message: 'Неверный формат email'}),

    password: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
});
