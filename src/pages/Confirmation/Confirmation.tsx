import {Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {ConfirmationForm} from '../../components/ConfirmationForm/ConfirmationForm';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {toast} from 'react-toastify';
import {SERVICES} from '../../api';
import {BackLayout} from '../layouts/BackLayout';
import {getUserResetData} from '../../app/store/user/selectors';

export const Confirmation: FC = () => {
    const verifyData = useTypedSelector((state) => state.user.verigyData);
    const data = useTypedSelector(getUserResetData);

    /**
     * Обновить код
     */
    const handleResendCode = async () => {
        if (verifyData || !verifyData.email) {
            toast.error('Почта не указана');
            return;
        }

        const data = await SERVICES.AuthService.resendCode(verifyData.email);
        toast.success('Код выслан заново');
    };

    return (
        <>
            <Helmet>
                <title>Код подтверждения</title>
            </Helmet>
            <BackLayout title="Назад">
                <Stack direction={'column'} gap={'25px'} my={'auto'}>
                    <Typography variant="body1" textAlign={'center'}>
                        Введите код подтверждения
                    </Typography>
                    <ConfirmationForm />
                    {!data.email && (
                        <Stack
                            direction={'row'}
                            gap={'5px'}
                            justifyContent={'center'}
                        >
                            <Typography variant="body2" textAlign={'center'}>
                                Не пришёл код?
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign={'center'}
                                onClick={handleResendCode}
                            >
                                Отправить ещё раз
                            </Typography>
                        </Stack>
                    )}
                </Stack>
            </BackLayout>
        </>
    );
};
