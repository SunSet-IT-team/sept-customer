import {IServerAns} from '../../../../types/share';
import {CustomerResponse} from '../../share/types';

export interface IVerifyDTO {
    email: string;
    code: string;
}

export interface IVerifyResponse extends IServerAns {
    data: {
        message: string;
        token: string;
        user: CustomerResponse;
    };
}
