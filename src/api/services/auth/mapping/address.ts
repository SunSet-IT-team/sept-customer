import {Address} from '../../../../types/user';
import {AddressResponse} from '../../share/types';

/**
 * Фунция состыкования данных с севера под наши данные
 * Функция переводит адрес
 */
export const mappingServerAddress = (data: AddressResponse): Address => {
    return {
        id: data.id,
        address: data.value,
    };
};
