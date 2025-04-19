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
        reviewsCount: 10,
        phone: data.profile.phone,
        profileImg: data.profile.profilePhotos
            ? getImagePath(data.profile.profilePhotos[0].url)
            : '',
        licenseDoc: data.profile.licenseDocs
            ? getImagePath(data.profile.licenseDocs[0].url)
            : '',
        registrationDoc: data.profile.registrationDocs
            ? getImagePath(data.profile.registrationDocs[0].url)
            : '',
    };
};
