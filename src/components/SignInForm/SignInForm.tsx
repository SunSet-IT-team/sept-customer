import {zodResolver} from '@hookform/resolvers/zod';
import {Button, Link} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {Link as ReactRouterDomLink} from 'react-router-dom';
import {signInDefaultsValues} from './data';
import {ISignInForm} from './form.type';
import {signInFormSchema} from './schema';
import {SignInFormContent} from './SignInFormContent/SignInFormContent';
import {buttonStyles, linkStyles} from './styles';
import {SERVICES} from '../../api';
import {toast} from 'react-toastify';
import {useAppDispatch} from '../../app/store/store';
import {auth} from '../../app/store/user/auth';
import {setUser} from '../../app/store/user/slice';
import {mappingServerCustomer} from '../../api/services/auth/mapping/customer';
export const SignInForm: FC = () => {
    const dispatch = useAppDispatch();

    /**
     * Вход по логину
     */
    const onSubmit = async (data: ISignInForm) => {
        try {
            const res = await SERVICES.AuthService.login(data);
            if (!res.success) return;

            auth(res.data.token);
            dispatch(setUser(mappingServerCustomer(res.data.user)));
        } catch (error) {
            const message = error?.response?.data?.message;

            console.log(error);

            toast.error(message || 'Ошибка авторизации');
        }
    };

    return (
        <FormContainer
            onSuccess={onSubmit}
            resolver={zodResolver(signInFormSchema)}
            defaultValues={signInDefaultsValues}
            mode="onChange"
        >
            <SignInFormContent />
            <Link
                to="/reset"
                variant="body1"
                color="secondary"
                component={ReactRouterDomLink}
                sx={linkStyles}
            >
                Забыли пароль?
            </Link>
            <Button
                variant="contained"
                color="secondary"
                sx={buttonStyles}
                type="submit"
            >
                Войти в личный кабинет
            </Button>
        </FormContainer>
    );
};
