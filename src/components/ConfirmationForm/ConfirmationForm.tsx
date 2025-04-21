import {FC, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {OtpField} from '../ui/Inputs/OtpField/OtpField';
import {IConfirmationForm} from './form.type';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {toast} from 'react-toastify';
import {SERVICES} from '../../api';
import {auth} from '../../app/store/user/auth';
import {setUser} from '../../app/store/user/slice';
import {useAppDispatch} from '../../app/store/store';
import {mappingServerCustomer} from '../../api/services/auth/mapping/customer';
import {getUserResetData} from '../../app/store/user/selectors';

/**
 * Шаблон формы подтверждения кода
 */
export const ConfirmationForm: FC = () => {
    const confirmData = useTypedSelector((state) => state.user.verigyData);
    const resetData = useTypedSelector(getUserResetData);
    const dispatch = useAppDispatch();

    const {
        control,
        watch,
        setError,
        formState: {errors},
        clearErrors,
    } = useForm<IConfirmationForm>({
        defaultValues: {
            verificationCode: '',
        },
    });

    const code = watch('verificationCode');

    const handleConfirm = async () => {
        if (!confirmData.email) {
            toast.error('Не указан email');
            return;
        }

        try {
            const data = await SERVICES.AuthService.verifyEmail({
                email: confirmData.email,
                code,
            });

            if (!data.success) {
                const m = data.error || 'Ошибка сервера';
                toast.error(m);
                setError('verificationCode', {message: 'Неверный код'});
            }

            auth(data.data.token);
            dispatch(setUser(mappingServerCustomer(data.data.user)));
            toast.success(data.data.message);
        } catch (error) {
            const message =
                error?.response?.data?.message || 'Ошибка авторизации';

            toast.error(message);
            setError('verificationCode', {message});
        }
    };

    const handleReset = async () => {
        if (!resetData.email) {
            toast.error('Не указан email');
            return;
        }

        try {
            const data = await SERVICES.AuthService.resetPassword({
                email: resetData.email,
                newPassword: resetData.password,
                code,
            });

            if (!data.success) {
                const m = data.error || 'Ошибка сервера';
                toast.error(m);
                setError('verificationCode', {message: 'Неверный код'});
            }
            toast.success(data.data.message);

            const loginData = await SERVICES.AuthService.login({
                email: resetData.email,
                password: resetData.password,
            });

            if (!loginData.success) {
                toast.error(loginData.error);
                return;
            }

            auth(loginData.data.token);

            dispatch(setUser(mappingServerCustomer(loginData.data.user)));
        } catch (error) {
            const message =
                error?.response?.data?.message || 'Ошибка авторизации';

            toast.error(message);
            setError('verificationCode', {message});
        }
    };

    const handleChageCode = async () => {
        clearErrors('verificationCode');

        if (code.length !== 6) return;

        if (confirmData?.email) {
            handleConfirm();
        } else {
            handleReset();
        }
    };

    useEffect(() => {
        handleChageCode();
    }, [code]);

    return (
        <form>
            <Controller
                name="verificationCode"
                control={control}
                rules={{validate: (value) => value.length === 6}}
                render={({field}) => (
                    <OtpField
                        field={field}
                        errorMessage={errors.verificationCode?.message}
                    />
                )}
            />
        </form>
    );
};
