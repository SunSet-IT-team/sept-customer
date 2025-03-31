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
export const SignInForm: FC = () => {
    const onSubmit = (data: ISignInForm) => {
        console.log(data);
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
                to="/forgot-password"
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
