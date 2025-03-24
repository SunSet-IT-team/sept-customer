import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {IRegisterForm} from './form.type';
import {signUpFormSchema} from './schema';
import {SignUpFormContent} from './SignUpFormContent';
export const SignUpForm: FC = () => {
    const onSubmit = (data: IRegisterForm) => {
        console.log(data);
    };
    return (
        <FormContainer
            onSuccess={onSubmit}
            resolver={zodResolver(signUpFormSchema)}
            defaultValues={{
                fullname: '',
                email: '',
                phone: '',
                password: '',
                processingDataAccepted: false,
            }}
            mode="onChange"
        >
            <SignUpFormContent />
            <Button
                variant="contained"
                color="secondary"
                sx={{mt: '50px', width: '100%', py: '12px'}}
                type="submit"
            >
                Зарегистрироваться
            </Button>
        </FormContainer>
    );
};
