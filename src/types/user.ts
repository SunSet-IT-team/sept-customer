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
        profile: Profile;
    };

/**
 * Профиль
 */
export type Profile = {
    profileImage: string;
    orderQty: number;
    addresses: Address[];
    favoriteIds: number[];
};

/**
 * Адрес
 */
export type Address = WithId & {
    address: string;
};

/**
 * Данные для подтверждения
 */
export type VerifyData = {
    email: string;
};
