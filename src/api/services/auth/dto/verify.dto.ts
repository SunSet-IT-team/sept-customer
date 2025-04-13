import {IServerAns} from '../../../../types/share';

export interface IVerifyDTO {
    email: string;
    code: string;
}

export interface IVerifyResponse extends IServerAns {}
