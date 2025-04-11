import {API_ROUTES} from '../..';
import axiosInstance from '../../instance';
import {IResetPasswordDTO} from './dto/reset-password.dto';

export const AuthService = {
    /**
     * ХЗ че
     */
    async resetPassword(data: IResetPasswordDTO) {
        const response = await axiosInstance({
            url: API_ROUTES.RESET_PASSWORD(),
            method: 'POST',
            data: {
                data,
            },
        });
        return response.data;
    },

    /**
     * тоже хз че
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

    async getUserInfo() {
        const response = await axiosInstance.get(
            API_ROUTES.GET_CURRENT_USER_INFO()
        );
        return response.data;
    },
};
