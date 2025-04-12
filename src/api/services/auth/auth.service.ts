import {API_ROUTES} from '../..';
import axiosInstance from '../../instance';
import { ILoginDTO } from './dto/login.dto';
import { IRegisterDTO, IRegisterResponse } from './dto/register.dto';
import {IResetPasswordDTO} from './dto/reset-password.dto';

export const AuthService = {
    /**
     * Регистрация
     */
    async register(data: IRegisterDTO) {
        const response = await axiosInstance<IRegisterResponse>({
            url: API_ROUTES.REGISTER(),
            method: 'POST',
            data
        });
        return response.data;
    },

    /**
     * Вход по логину и паролю
     */
    async login(data: ILoginDTO) {
        const response = await axiosInstance({
            url: API_ROUTES.LOGIN(),
            method: 'POST',
            data
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
            data
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
     * Получить инфу о пользователе
     */
    async getUserInfo() {
        const response = await axiosInstance.get(
            API_ROUTES.GET_CURRENT_USER_INFO()
        );
        return response.data;
    },
};
