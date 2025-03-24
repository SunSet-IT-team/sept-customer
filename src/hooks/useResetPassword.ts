import {useMutation} from '@tanstack/react-query';
import {useNavigate} from 'react-router-dom';
import {SERVICES} from '../api';

export const useResetPassword = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: SERVICES.AuthService.resetPassword,
        onSuccess() {
            navigate('/confirmation');
        },
    });
};
