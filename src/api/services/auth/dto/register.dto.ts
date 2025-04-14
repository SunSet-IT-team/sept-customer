import {IServerAns} from '../../../../types/share';
import {CustomerResponse} from '../../share/types';

export interface IRegisterDTO {
    email: string;
    password: string;
    firstName: string;
    phone: string;
    address?: string;
}

export interface IRegisterResponse extends IServerAns {
    data: {
        message: string;
        user: CustomerResponse;
    };
}
