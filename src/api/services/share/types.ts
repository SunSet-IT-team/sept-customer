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
    firstName: string;
    id: string;
    lastName: string | null;
    profile: ProfileResponse;
    role: 'CUSTOMER';
};

/**
 * Профиль
 */
export type ProfileResponse = {
    addresses: AddressResponse[];
    ordersCount: number;
};

/**
 * Адресс
 */
export type AddressResponse = {
    id: string;
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
