import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {MyOrdersList} from '../../components/MyOrdersList/MyOrdersList';
import {Spinner} from '../../components/Spinner/Spinner';
import {useFetchOrders} from '../../hooks/Orders/useFetchOrders';
import {BackLayout} from '../layouts/BackLayout';
import {LayoutWithNavbar} from '../layouts/LayoutWithNavbar/LayoutWithNavbar';
import {Typography} from '@mui/material';
import { useStyles } from './styles';

export const MyOrders: FC = () => {
    const {orders, isLoading, ref} = useFetchOrders();

    if (!orders) {
        return <Spinner />;
    }

    const styles = useStyles()

    return (
        <>
            <Helmet>
                <title>Мои заказы</title>
            </Helmet>
            <BackLayout title="Мои заказы" sxTitle={styles.pageTitle}>
                <LayoutWithNavbar>
                    {orders && orders.length === 0 && !isLoading && (
                        <Typography
                            variant="h6"
                            sx={{textAlign: 'center', my: 2}}
                        >
                            Заказов пока нет
                        </Typography>
                    )}
                    <MyOrdersList orders={orders} observedRef={ref} />
                    {isLoading && <Spinner />}
                </LayoutWithNavbar>
            </BackLayout>
        </>
    );
};
