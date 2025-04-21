import {IServerAns} from '../../../../types/share';
import {CustomerResponse} from '../../share/types';

/**
 * Параметры для изменения профиля
 */
export interface IChangeMeDTO {
    email?: string;
    phone?: string;
    firstName?: string;
    updateAddresses?: {
        id: number;
        value: string;
    }[];
    newAddresses?: {
        value: string;
    }[];
    deleteAddressIds?: number[];
    profilePhoto?: File;
    password?: string;
}

export interface IChangeMeResponse extends IServerAns {
    data: CustomerResponse;
}
