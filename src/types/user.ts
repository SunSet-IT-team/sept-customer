import {WithPriority, WithId, WithName, WithEmail, WithPhone} from './share';
/**
 * Типы для работы текущего пользователя
 */

/**
 * Заказчик
 */
export type Customer = WithPriority &
    WithId &
    WithName &
    WithEmail &
    WithPhone & {
        profileImage: string;
        orderQty: number;
        addresses: Address[];
    };

/**
 * Адрес
 */
export type Address = WithId & {
    address: string;
};
