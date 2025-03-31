import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {signUpDefaultsValues} from './data';
import {IRegisterForm} from './form.type';
import {signUpFormSchema} from './schema';
import {SignUpFormContent} from './SignUpFormContent/SignUpFormContent';
import {signUpButtonStyles} from './styles';
export const SignUpForm: FC = () => {
    const onSubmit = (data: IRegisterForm) => {
        console.log(data);
    };
    return (
        <FormContainer
            onSuccess={onSubmit}
            resolver={zodResolver(signUpFormSchema)}
            defaultValues={signUpDefaultsValues}
            mode="onChange"
        >
            <SignUpFormContent />
            <Button
                variant="contained"
                color="secondary"
                sx={signUpButtonStyles}
                type="submit"
            >
                Зарегистрироваться
            </Button>
        </FormContainer>
    );
};
