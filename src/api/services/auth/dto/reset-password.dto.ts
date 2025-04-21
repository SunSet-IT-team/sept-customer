import {IServerAns} from '../../../../types/share';

/**
 * Параметры для повторной отправки кода
 */
export type ISendResetCodeDTO = {
    email: string;
};

/**
 * Параметры для сброса пароля
 */
export type IResetPasswordDTO = {
    code: string;
    newPassword: string;
    email: string;
};

export interface ISendResetCodeResponse extends IServerAns {
    data: {
        message: string;
    };
}

export interface IResetPasswordResponse extends IServerAns {
    data: {
        message: string;
    };
}
