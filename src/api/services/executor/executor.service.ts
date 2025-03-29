import {API_ROUTES} from '../..';
import {IExecutorFull, IExecutorShort} from '../../../types/executor';
import {axiosInstance} from '../../instance';

export const ExecutorService = {
    async getAllExecutors(): Promise<IExecutorShort[]> {
        const response = await axiosInstance<IExecutorShort[]>({
            url: API_ROUTES.GET_ALL_EXECUTORS(),
            method: 'GET',
        });
        return new Promise((res) => {
            setTimeout(() => {
                res([
                    {
                        id: 1,
                        title: 'ООО Септики',
                        reviewsCount: 85,
                        averageRating: 4.9,
                        imgUrl: 'https://placehold.co/90x90',
                    },
                    {
                        id: 2,
                        title: 'ООО Септики',
                        reviewsCount: 85,
                        averageRating: 4.9,
                        imgUrl: 'https://placehold.co/90x90',
                    },
                    {
                        id: 3,
                        title: 'ООО Септики',
                        reviewsCount: 85,
                        averageRating: 4.9,
                        imgUrl: 'https://placehold.co/90x90',
                    },
                ]);
            }, 1500);
        });
        return response.data;
    },

    async getExecutorById(executor_id: number): Promise<IExecutorFull> {
        const response = await axiosInstance<IExecutorFull>({
            url: API_ROUTES.GET_EXECUTOR_BY_ID(executor_id),
            method: 'GET',
        });
        return new Promise((res) => {
            setTimeout(() => {
                res({
                    id: 1,
                    ratingsCount: 85,
                    title: 'ООО Септики',
                    reviewsCount: 24,
                    averageRating: 4.9,
                    callsCount: 231,
                    experience: 16,
                    imgUrl: 'https://placehold.co/90x90',
                    description:
                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum odio quisquam quidem soluta voluptas, obcaecati a cum saepe dolores culpa deleniti minus non tenetur odit eligendi alias rem fugit quia.',
                    reviews: [
                        {
                            id: 1,
                            username: 'Пользователь 1',
                            text: 'Работой компании остался очень доволен. Приятное общение, пунктуально. К работе меня не привлекали. Предоставили шланги, через 1,5 часа все было закончено.',
                            rating: 4,
                        },
                        {
                            id: 2,
                            username: 'Пользователь 2',
                            text: 'Ежегодно обращаюсь в одну и ту же компанию, всегда знаю, что приедут в удобный для меня день и мне не придется искать ассенизатор. Работают тщательно, кропотливо. ',
                            rating: 5,
                        },
                        {
                            id: 3,
                            username: 'Пользователь 3',
                            text: 'Ежегодно обращаюсь в одну и ту же компанию, всегда знаю, что приедут в удобный для меня день и мне не придется искать ассенизатор. Работают тщательно, кропотливо.Ежегодно обращаюсь в одну и ту же компанию, всегда знаю, что приедут в удобный для меня день и мне не придется искать ассенизатор. Работают тщательно, кропотливо.Ежегодно обращаюсь в одну и ту же компанию, всегда знаю, что приедут в удобный для меня день и мне не придется искать ассенизатор. Работают тщательно, кропотливо.Ежегодно обращаюсь в одну и ту же компанию, всегда знаю, что приедут в удобный для меня день и мне не придется искать ассенизатор. Работают тщательно, кропотливо.Ежегодно обращаюсь в одну и ту же компанию, всегда знаю, что приедут в удобный для меня день и мне не придется искать ассенизатор. Работают тщательно, кропотливо. ',
                            rating: 2,
                        },
                    ],
                });
            }, 1500);
        });
        return response.data;
    },
};
