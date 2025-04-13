import {IServerAns} from '../../../../types/share';
import {CustomerResponse} from '../../share/types';

export interface ILoginDTO {
    email: string;
    password: string;
}

export interface ILoginResponse extends IServerAns {
    data: {
        token: string;
        user: CustomerResponse;
    };
}
