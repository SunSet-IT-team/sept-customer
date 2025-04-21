import {Customer} from '../../../../types/user';
import {getImagePath} from '../../../../utils/share';
import {CustomerResponse} from '../../share/types';
import {mappingServerAddress} from './address';

/**
 * Фунция состыкования данных с севера под наши данные
 * Функция переводит пользователя
 */
export const mappingServerCustomer = (data: CustomerResponse): Customer => {
    return {
        id: `${data.id}`,
        name: data.name,
        email: data.email,
        phone: data.profile.phone,
        priority: data.profile.priority,
        profile: {
            addresses: data.profile.addresses.map((el) =>
                mappingServerAddress(el)
            ),
            orderQty: data.profile.ordersCount,
            profileImage: data.profile.profilePhotos[0]
                ? getImagePath(data.profile.profilePhotos[0].url)
                : '',
            favoriteIds: data.profile.favoriteIds.map((el) => el.id),
        },
    };
};
