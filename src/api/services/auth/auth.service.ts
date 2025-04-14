import {API_ROUTES} from '../..';
import axiosInstance from '../../instance';
import {IGetMeResponse} from './dto/getMe.dto';
import {ILoginDTO, ILoginResponse} from './dto/login.dto';
import {IRegisterDTO, IRegisterResponse} from './dto/register.dto';
import {IResetPasswordDTO} from './dto/reset-password.dto';
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
     * Сброс пароля если забыл
     */
    async resetPassword(data: IResetPasswordDTO) {
        const response = await axiosInstance({
            url: API_ROUTES.RESET_PASSWORD(),
            method: 'POST',
            data,
        });
        return response.data;
    },

    /**
     * Ввод цифр подтверждения для сброса пароля
     */
    async confirmResetPassword(code: number) {
        const response = await axiosInstance({
            url: API_ROUTES.CONFIRMATION_RESET_PASSWORD(),
            method: 'POST',
            data: {
                code,
            },
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
};
