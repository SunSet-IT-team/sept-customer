import {Customer} from '../../../../types/user';
import {CustomerResponse} from '../../share/types';
import {mappingServerAddress} from './address';

/**
 * Фунция состыкования данных с севера под наши данные
 * Функция переводит пользователя
 */
export const mappginServerCustomer = (data: CustomerResponse): Customer => {
    return {
        id: data.id,
        name: data.firstName,
        email: data.email,
        phone: '89009009090',
        priority: 100,
        profile: {
            addresses: data.profile.addresses.map((el) =>
                mappingServerAddress(el)
            ),
            orderQty: data.profile.ordersCount,
            profileImage: '',
        },
    };
};
