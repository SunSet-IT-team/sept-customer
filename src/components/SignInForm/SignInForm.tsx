import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
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
            <Button
                variant="contained"
                color="secondary"
                sx={{mt: '50px', width: '100%', py: '12px'}}
                type="submit"
            >
                Войти
            </Button>
        </FormContainer>
    );
};
