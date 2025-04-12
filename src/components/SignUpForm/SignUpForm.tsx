import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {signUpDefaultsValues} from './data';
import {IRegisterForm} from './form.type';
import {signUpFormSchema} from './schema';
import {SignUpFormContent} from './SignUpFormContent/SignUpFormContent';
import {signUpButtonStyles} from './styles';
import { SERVICES } from '../../api';
import { IRegisterDTO } from '../../api/services/auth/dto/register.dto';
import { useNavigate } from 'react-router-dom';

export const SignUpForm: FC = () => {
    const navigate = useNavigate()
    
    const onSubmit = async (data: IRegisterForm) => {
        // Тут данные с формы и данные для api сервака различаются
        const sendingData: IRegisterDTO = {
            email: data.email,
            password: data.password,
            address: 'ул. Ленина, д. 1',
        };
        try {
            const {token} = await SERVICES.AuthService.register(sendingData);
            window.localStorage.setItem("token", token)
            navigate('/sign-in');
        } catch (error) {
            console.error(`Ошибка регистрации!\n\n${error}`);
        }
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
