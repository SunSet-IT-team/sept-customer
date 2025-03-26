import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {useNavigate} from 'react-router-dom';
import {useActions} from '../../hooks/useActions';
import {useResetPassword} from '../../hooks/useResetPassword';
import {resetPasswordSlice} from '../../store/reset-password/reset-password.slice';
import {ForgotPasswordFormContent} from './ForgotPasswordContent';
import {IForgotPasswordForm} from './form.type';
import {forgotPasswordFormSchema} from './schema';
export const ForgotPasswordForm: FC = () => {
    const navigate = useNavigate();
    const {mutateAsync, isSuccess} = useResetPassword();
    const {setResetPasswordData} = useActions(resetPasswordSlice.actions);
    const onSubmit = (data: IForgotPasswordForm) => {
        console.log(data);
        setResetPasswordData({
            userId: 1,
            ...data,
        });
        navigate('/confirmation');
        // mutateAsync({
        //     userId: 1,
        //     ...data,
        // });
    };
    return (
        <FormContainer
            onSuccess={onSubmit}
            resolver={zodResolver(forgotPasswordFormSchema)}
            defaultValues={{
                email: '',
                new_password: '',
            }}
            mode="onChange"
        >
            <ForgotPasswordFormContent />

            <Button
                variant="contained"
                color="secondary"
                sx={{mt: '44px', width: '100%', py: '12px'}}
                type="submit"
            >
                Сменить пароль
            </Button>
        </FormContainer>
    );
};
