import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {signUpDefaultsValues} from './data';
import {IRegisterForm} from './form.type';
import {signUpFormSchema} from './schema';
import {SignUpFormContent} from './SignUpFormContent/SignUpFormContent';
import {signUpButtonStyles} from './styles';
import {SERVICES} from '../../api';
import {IRegisterDTO} from '../../api/services/auth/dto/register.dto';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useAppDispatch} from '../../app/store/store';
import {setVerigyData} from '../../app/store/user/slice';

export const SignUpForm: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = async (data: IRegisterForm) => {
        // Формируем данные
        const sendingData: IRegisterDTO = {
            email: data.email,
            password: data.password,
            firstName: data.fullname,
            phone: data.phone,
            address: 'test',
        };

        try {
            const {success} = await SERVICES.AuthService.register(sendingData);
            dispatch(
                setVerigyData({
                    email: data.email,
                })
            );
            if (success) navigate('/confirmation');
        } catch (error) {
            toast.error(`Ошибка регистрации!`);
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
