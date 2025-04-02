import {Box, Button, Stack, Typography} from '@mui/material';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link, useParams} from 'react-router-dom';
import {useActions} from '../../hooks/useActions';
import {newOrderSlice} from '../../store/new_order/new_order.slice';
import {
    buttonStackStyle,
    buttonStyle,
    containerStyle,
    textStyle,
    titleStyle,
} from './styles';

export const OrderCreated: FC = () => {
    const {order_id} = useParams();
    const {setExecutor, setFormData, setService} = useActions(
        newOrderSlice.actions
    );

    useEffect(() => {
        setExecutor(null);
        setFormData(null);
        setService(null);
    }, [setExecutor, setFormData, setService]);

    return (
        <>
            <Helmet>
                <title>Заказ создан</title>
            </Helmet>
            <Box sx={containerStyle}>
                <Stack>
                    <Typography variant="h1" sx={titleStyle}>
                        ЭКО Контроль
                    </Typography>
                    <Typography variant="body1" sx={textStyle}>
                        Ваш вызов №{order_id} создан. Вы можете связаться с
                        исполнителем для уточнения деталей.
                    </Typography>
                    <Stack sx={buttonStackStyle}>
                        <Button
                            variant="contained"
                            sx={buttonStyle}
                            component={Link}
                            to={`/order/${order_id}/chat`}
                            color="secondary"
                        >
                            Открыть чат
                        </Button>
                        <Button
                            variant="contained"
                            sx={buttonStyle}
                            component={Link}
                            to="/"
                            color="secondary"
                        >
                            На главную
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};
