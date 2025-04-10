import {z} from 'zod';

export const newReveiwFormShema = z.object({
    rating: z.number().min(1, {message: 'Укажите рейтинг'}),
    text: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
});

export interface INewReveiwForm extends z.infer<typeof newReveiwFormShema> {}
