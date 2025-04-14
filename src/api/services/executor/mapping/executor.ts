import {IExecutor} from '../../../../types/executor';
import {ExecutorResponse} from '../../share/types';

/**
 * Фунция состыкования данных с севера под наши данные
 * Функция переводит исполнителя
 */
export const mappingServerExecutors = (data: ExecutorResponse): IExecutor => {
    return {
        id: data.profile.id,
        title: data.name,
        averageRating: data.profile.rating,
        description: data.profile.about,
        callsCount: data.profile.completedOrders,
        experience: data.profile.experience,
        reviews: [],
        reviewsCount: 10,
        imgUrl: data.profile.profilePhoto,
    };
};
