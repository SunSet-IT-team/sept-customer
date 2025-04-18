import {IReview} from '../../../../types/executor';
import {mappingServerCustomer} from '../../auth/mapping/customer';
import {mappingServerExecutors} from '../../executor/mapping/executor';
import {ReviewResponce} from '../../share/types';

/**
 * Фунция состыкования данных с севера под наши данные
 * Функция переводит отзыв
 */
export const mappingServerReview = (data: ReviewResponce): IReview => {
    return {
        id: data.id,
        rating: data.rating,
        text: data.text,
        username: data.author.name,
        author: data.author ? mappingServerCustomer(data.author) : null,
        target: data.target ? mappingServerExecutors(data.target) : null,
        order: data.order,
        data: new Date(data.createdAt).toLocaleDateString('ru'),
    };
};
