import {zodResolver} from '@hookform/resolvers/zod';
import {Button, Link} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {Link as ReactRouterDomLink} from 'react-router-dom';
import {ISignInForm} from './form.type';
import {signInFormSchema} from './schema';
import {SignInFormContent} from './SignInFormContent';
export const SignInForm: FC = () => {
    const onSubmit = (data: ISignInForm) => {
        console.log(data);
    };
    return (
        <FormContainer
            onSuccess={onSubmit}
            resolver={zodResolver(signInFormSchema)}
            defaultValues={{
                email: '',
                password: '',
            }}
            mode="onChange"
        >
            <SignInFormContent />
            <Link
                to="/forgot-password"
                variant="body1"
                color="secondary"
                display={'block'}
                align="center"
                my={'28px'}
                component={ReactRouterDomLink}
            >
                Забыли пароль?
            </Link>
            <Button
                variant="contained"
                color="secondary"
                sx={{width: '100%', py: '12px'}}
                type="submit"
            >
                Войти в личный кабинет
            </Button>
        </FormContainer>
    );
};
