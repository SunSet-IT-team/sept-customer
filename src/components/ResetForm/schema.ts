import {z} from 'zod';

export const resetFormSchema = z.object({
    email: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'})
        .email({message: 'Неверный формат email'}),

    password: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
});

export type ResetFormData = z.infer<typeof resetFormSchema>;
