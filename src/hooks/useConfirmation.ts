import {useMutation} from '@tanstack/react-query';
import {useNavigate} from 'react-router-dom';
import {SERVICES} from '../api';

export const useConfirmation = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: SERVICES.AuthService.confirmResetPassword,
        onSuccess() {
            navigate('/sign-in');
        },
    });
};
