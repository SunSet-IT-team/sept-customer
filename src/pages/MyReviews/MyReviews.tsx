import {Box} from '@mui/material';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {useActions} from '../../hooks/useActions';
import {OrdersSlice} from '../../store/orders/orders.slice';
import {MyReviewsList} from '../../components/MyReviewsList/MyReviewList';

const ordersData: any[] = [
    {
        id: '39-19',
        name: 'ООО Септики',
        date: '16 июля, 16:00',
        address: 'Садовая, 15',
        review: {
            rating: 4,
            text: 'Работой компании остался очень доволен. Приятное общение, пунктуально. К работе меня не привлекали. Предоставили шланги, через 1,5 часа все было закончено.',
        },
    },
    {
        id: '39-20',
        name: 'ООО Септики',
        date: '16 июля, 16:00',
        address: 'Садовая, 15',
        review: {
            rating: 4,
            text: 'Ежегодно обращаюсь в одну и ту же компанию, всегда знаю, что приедут в удобный для меня день и мне не придется искать ассенизатор. Работают тщательно, кропотливо.',
        },
    },
];
export const MyReviews: FC = () => {
    const {setOrders} = useActions(OrdersSlice.actions);
    useEffect(() => {
        console.log(ordersData);
        setOrders(ordersData);
    }, []);

    return (
        <Box py={'26px'}>
            <Helmet>
                <title>Мои отзывы</title>
            </Helmet>
            <PageTitle title="Мои отзывы" />
            <MyReviewsList orders={ordersData} />
        </Box>
    );
};
