import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {ConfirmationForm} from '../../components/ConfirmationForm/ConfirmationForm';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {toast} from 'react-toastify';
import {SERVICES} from '../../api';

export const Confirmation: FC = () => {
    const verifyData = useTypedSelector((state) => state.user.verigyData);

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
            <Box
                position={'relative'}
                py={'26px'}
                px={'33px'}
                minHeight={'100dvh'}
                display={'flex'}
                flexDirection={'column'}
            >
                <PageTitle title="Код подтверждения" />
                <Stack direction={'column'} gap={'25px'} my={'auto'}>
                    <Typography variant="body1" textAlign={'center'}>
                        Введите код подтверждения
                    </Typography>
                    <ConfirmationForm />
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
                </Stack>
            </Box>
        </>
    );
};
