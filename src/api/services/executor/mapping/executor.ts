import {IExecutor} from '../../../../types/executor';
import {getImagePath} from '../../../../utils/share';
import {ExecutorResponse} from '../../share/types';

/**
 * Фунция состыкования данных с севера под наши данные
 * Функция переводит исполнителя
 */
export const mappingServerExecutors = (data: ExecutorResponse): IExecutor => {
    return {
        id: data.id,
        title: data.profile.companyName,
        averageRating: data.profile.rating,
        description: data.profile.about,
        callsCount: data.profile.completedOrders,
        experience: data.profile.experience,
        reviews: [],
        reviewsCount: data.reviewsCount,
        phone: data.profile.phone,
        profileImg: getImagePath(data.profile.profilePhoto.url),
        licenseDoc: getImagePath(data.profile.licenseDoc.url),
        registrationDoc: getImagePath(data.profile.registrationDoc.url),
    };
};
