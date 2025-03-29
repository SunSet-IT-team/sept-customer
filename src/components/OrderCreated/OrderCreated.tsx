import {Box, Button, Stack, Typography} from '@mui/material';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link, useParams} from 'react-router-dom';
import {useActions} from '../../hooks/useActions';
import {newOrderSlice} from '../../store/new_order/new_order.slice';

export const OrderCreated: FC = () => {
    const {order_id} = useParams();
    const {setExecutor, setFormData} = useActions(newOrderSlice.actions);
    useEffect(() => {
        setExecutor(null);
        setFormData(null);
    }, []);
    return (
        <>
            <Helmet>
                <title>Заказ создан</title>
            </Helmet>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                minHeight={'100vh'}
                px={'30px'}
            >
                <Stack>
                    <Typography variant="h1" textAlign={'center'}>
                        ЭКО Контроль
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign={'center'}
                        mt={'30px'}
                    >
                        Ваш вызов №{order_id} создан Вы можете связаться с
                        исполнителем для уточнения деталей.
                    </Typography>
                    <Stack gap={'20px'}>
                        <Button
                            variant="contained"
                            sx={{py: '17px', mt: '78px'}}
                            component={Link}
                            to={`/order/${order_id}/chat`}
                            color="secondary"
                        >
                            Открыть чат
                        </Button>
                        <Button
                            variant="contained"
                            sx={{py: '17px'}}
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
