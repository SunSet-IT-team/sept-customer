import {Customer} from '../../../../types/user';
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
            profileImage: data.profile.profilePhoto || '',
            favoriteIds: data.profile.favoriteIds,
        },
    };
};
