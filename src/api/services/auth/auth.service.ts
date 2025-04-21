import {API_ROUTES} from '../..';
import axiosInstance from '../../instance';
import {IChangeMeDTO, IChangeMeResponse} from './dto/changeMe.dto';
import {IGetMeResponse} from './dto/getMe.dto';
import {ILoginDTO, ILoginResponse} from './dto/login.dto';
import {IRegisterDTO, IRegisterResponse} from './dto/register.dto';
import {
    IResetPasswordDTO,
    IResetPasswordResponse,
    ISendResetCodeDTO,
    ISendResetCodeResponse,
} from './dto/reset-password.dto';
import {IVerifyDTO, IVerifyResponse} from './dto/verify.dto';

export const AuthService = {
    /**
     * Регистрация
     */
    async register(data: IRegisterDTO) {
        const response = await axiosInstance<IRegisterResponse>({
            url: API_ROUTES.REGISTER(),
            method: 'POST',
            data,
        });
        return response.data;
    },

    /**
     * Вход по логину и паролю
     */
    async login(data: ILoginDTO) {
        const response = await axiosInstance<ILoginResponse>({
            url: API_ROUTES.LOGIN(),
            method: 'POST',
            data,
        });
        return response.data;
    },

    /**
     * Отправка кода для сброса пароля
     */
    async sendResetPasswordCode(data: ISendResetCodeDTO) {
        const response = await axiosInstance<ISendResetCodeResponse>({
            url: API_ROUTES.SEND_RESET_CODE(),
            method: 'POST',
            data,
        });
        return response.data;
    },

    /**
     * Отправка кода для сброса пароля
     */
    async resetPassword(data: IResetPasswordDTO) {
        const response = await axiosInstance<IResetPasswordResponse>({
            url: API_ROUTES.RESET_PASSWORD(),
            method: 'POST',
            data,
        });
        return response.data;
    },

    /**
     * Подтверждение email
     */
    async verifyEmail(data: IVerifyDTO) {
        const response = await axiosInstance<IVerifyResponse>({
            url: API_ROUTES.VERIFY(),
            method: 'POST',
            data,
        });
        return response.data;
    },

    /**
     * Переотправка кода
     */
    async resendCode(email: string) {
        const response = await axiosInstance({
            url: API_ROUTES.VERIFY_RESEND(),
            method: 'POST',
            data: {
                email,
            },
        });
        return response.data;
    },

    /**
     * Получить инфу о пользователе
     */
    async getUserInfo() {
        const response = await axiosInstance.get<IGetMeResponse>(
            API_ROUTES.GET_ME()
        );
        return response.data;
    },

    /**
     * Обновить информацию о профиле
     */
    async changeMe(param: IChangeMeDTO) {
        const response = await axiosInstance.patch<IChangeMeResponse>(
            API_ROUTES.CHANGE_ME(),
            param,
            {
                headers: {'Content-Type': 'multipart/form-data'},
            }
        );
        return response.data;
    },
};
