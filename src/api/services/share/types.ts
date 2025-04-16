/**
 * Общие типы, которые встречаются в DTO
 *
 * DTO - ТО, что ОТДАЁМ
 * RESPONSE - ТО, что ПОЛУЧАЕМ
 */

import {ExecutorServiceType} from '../../../types/executor';
import {OrderStatus} from '../../../types/order';

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

/**
 * Исполнитель
 */
export type ExecutorResponse = {
    id: number;
    email: string;
    name: string;
    role: 'EXECUTOR';
    profile: ExecutorProfileResponse;
};

/**
 * Профиль
 */
export type ExecutorProfileResponse = {
    about: string;
    city: string | null;
    companyName: string;
    completedOrders: number;
    description: null | string;
    experience: number;
    id: number;
    phone: string;
    priority: number;
    profilePhoto: null | FileResponse;
    registrationDoc: null | FileResponse;
    licenseDoc: null | FileResponse;
    rating: number;
    workFormat: ExecutorServiceType;
};

/**
 * Заказ
 */
export type OrderResponse = {
    address?: AddressResponse;
    city?: string;
    comment: string | null;
    customerId: number;
    distanceToSeptic: number;
    executor: ExecutorResponse | null;
    customer: CustomerResponse | null;
    id: number;
    objectType: string;
    paymentMethod: string;
    price: number | null;
    priority: number;
    septicConstructionType: string;
    septicDepth: number;
    septicVolume: number;
    service: ServiceResponse | null;
    orderStaus: OrderStatus;
    status: OrderStatus;
    workDate: string;
};

/**
 * Файл, который приходит с сервера
 */
export interface FileResponse {
    id: number;
    type?: string;
    url: string;
}
