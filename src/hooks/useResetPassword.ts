import {useMutation} from '@tanstack/react-query';
import {SERVICES} from '../api';

export const useResetPassword = () => {
    return useMutation({
        mutationFn: SERVICES.AuthService.resetPassword,
    });
};
