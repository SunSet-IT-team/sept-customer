import {Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Chat} from '../../components/Chat/Chat';
import {useFetchChatOrder} from '../../hooks/Chat/useFetchOrderChat';
import {useParams} from 'react-router-dom';

export const OrderChat: FC = () => {
    const {orderId} = useParams();

    const {data} = useFetchChatOrder(orderId || 0);

    console.log(data);

    return (
        <Chat
            interlocutor={{
                name: 'ООО Септики',
                imgUrl: '',
            }}
            componentAboveChat={
                <Stack justifyContent={'center'} alignItems={'center'}>
                    <Typography fontSize={'14px'}>Заявка №4506</Typography>
                    <Typography fontSize={'14px'}>
                        Услуга: сборка септика
                    </Typography>
                </Stack>
            }
        />
    );
};
