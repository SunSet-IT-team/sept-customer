import {IServerAns} from '../../../../types/share';

export interface IRegisterDTO {
    email: string;
    password: string;
    firstName: string;
    phone: string;
    address?: string;
}

export interface IRegisterResponse extends IServerAns {}
