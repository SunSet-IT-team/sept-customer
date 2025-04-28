import {Box, Button, Stack, Typography} from '@mui/material';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link, useParams} from 'react-router-dom';
import {useActions} from '../../hooks/useActions';
import {newOrderSlice} from '../../app/store/newOrder/newOrder.slice';
import {
    buttonStackStyle,
    buttonStyle,
    containerStyle,
    textStyle,
    useStyles,
} from './styles';

export const OrderCreated: FC = () => {
    const {orderId} = useParams();
    const {setExecutor, setFormData, setService} = useActions(
        newOrderSlice.actions
    );

    useEffect(() => {
        setExecutor(null);
        setFormData(null);
        setService(null);
    }, [setExecutor, setFormData, setService]);

    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Заказ создан</title>
            </Helmet>
            <Box sx={containerStyle}>
                <Stack>
                    <Box sx={styles.logoContainer}>
                        <Box
                            component="img"
                            sx={styles.logo}
                            alt="ЭКОКОНТРОЛЬ logo"
                            src="/logo.png"
                        />
                        <Box
                            component="img"
                            sx={styles.logoText}
                            alt="ЭКОКОНТРОЛЬ"
                            src="/logo_text.png"
                        />
                    </Box>
                    <Typography variant="body1" sx={textStyle}>
                        Ваш вызов №{orderId} создан. Вы можете связаться с
                        исполнителем для уточнения деталей.
                    </Typography>
                    <Stack sx={buttonStackStyle}>
                        <Button
                            variant="contained"
                            sx={buttonStyle}
                            component={Link}
                            to={`/order/chat/${orderId}`}
                        >
                            Открыть чат
                        </Button>
                        <Button
                            variant="contained"
                            sx={buttonStyle}
                            component={Link}
                            to="/"
                        >
                            На главную
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};
