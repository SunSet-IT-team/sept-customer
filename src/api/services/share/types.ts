/**
 * Общие типы, которые встречаются в DTO
 *
 * DTO - ТО, что ОТДАЁМ
 * RESPONSE - ТО, что ПОЛУЧАЕМ
 */

/**
 * Покупатель
 */
export type CustomerResponse = {
    email: string;
    name: string;
    id: number;
    profile: ProfileResponse;
    role: 'CUSTOMER';
};

/**
 * Профиль
 */
export type ProfileResponse = {
    addresses: AddressResponse[];
    ordersCount: number;
    phone: string;
    priority: number;
    profilePhoto: string | null;
};

/**
 * Адресс
 */
export type AddressResponse = {
    id: number;
    value: string;
};

/**
 * Услуга
 */
export type ServiceResponse = {
    id: string;
    name: string;
    priority: number;
};
