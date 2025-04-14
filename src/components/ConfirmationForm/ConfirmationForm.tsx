import {FC, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {OtpField} from '../ui/Inputs/OtpField/OtpField';
import {IConfirmationForm} from './form.type';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {toast} from 'react-toastify';
import {SERVICES} from '../../api';
import {useNavigate} from 'react-router-dom';
import {auth} from '../../store/user/auth';
import {setUser} from '../../store/user/slice';
import {useAppDispatch} from '../../store/store';
import {mappginServerCustomer} from '../../api/services/auth/mapping/customer';

/**
 * Шаблон формы подтверждения кода
 */
export const ConfirmationForm: FC = () => {
    const {email} = useTypedSelector((state) => state.user.verigyData);
    const dispatch = useAppDispatch();

    const {
        control,
        watch,
        setError,
        formState: {errors},
        clearErrors,
    } = useForm<IConfirmationForm>({
        defaultValues: {
            verification_code: '',
        },
    });

    const code = watch('verification_code');

    const handleChageCode = async () => {
        clearErrors('verification_code');

        if (code.length !== 6) return;

        if (!email) {
            toast.error('Не указан email для сброса пароля');
            return;
        }

        try {
            const res = await SERVICES.AuthService.verifyEmail({
                email,
                code,
            });

            if (!res.success) {
                const m = res.error || 'Ошибка сервера';
                toast.error(m);
                setError('verification_code', {message: 'Неверный код'});
            }

            auth(res.data.token);
            dispatch(setUser(mappginServerCustomer(res.data.user)));
        } catch (error) {
            const message =
                error?.response?.data?.message || 'Ошибка авторизации';

            toast.error(message);
            setError('verification_code', {message});
        }
    };

    useEffect(() => {
        handleChageCode();
    }, [code]);

    return (
        <form>
            <Controller
                name="verification_code"
                control={control}
                rules={{validate: (value) => value.length === 6}}
                render={({field}) => (
                    <OtpField
                        field={field}
                        errorMessage={errors.verification_code?.message}
                    />
                )}
            />
        </form>
    );
};
