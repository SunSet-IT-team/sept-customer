import {Box} from '@mui/material';
import {FC} from 'react';
import {useFetchChatOrder} from '../../hooks/Chat/useFetchOrderChat';
import {Navigate, useParams} from 'react-router-dom';
import LoadPage from '../LoadPage';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getCurrentUser} from '../../app/store/user/selectors';
import {useHandleBack} from '../../hooks/useHandleBack';
import {getImagePath} from '../../utils/share';
import {Chat, ChatForm} from 'sunset-chat';
import {Helmet} from 'react-helmet';

export const OrderChat: FC = () => {
    const {orderId} = useParams();

    const user = useTypedSelector(getCurrentUser);

    const {data, isPending} = useFetchChatOrder(orderId || 0);

    const {handleBack} = useHandleBack();

    if (!orderId) return <Navigate to="/" />;

    if (isPending) return <LoadPage />;

    const notCurrentUser = data.data.participants.find(
        (el) => `${el.userId}` !== user.id
    );

    const chatData: Chat = {
        id: data.data.id,
        messages: [],
        additionalInfo: data.data.theme,
        currentUserId: user.id,
        chatUser: {
            id: notCurrentUser.userId,
            name: notCurrentUser.user.profile.companyName,
            imagePath: getImagePath(
                notCurrentUser.user.profile.profilePhoto.url
            ),
        },
    };

    return (
        <Box sx={{maxHeight: '100dvh'}}>
            <Helmet>
                <title>Заказ {orderId}</title>
            </Helmet>
            <Box sx={{height: '100dvh'}}>
                <ChatForm chat={chatData} handleCloseChat={handleBack} />
            </Box>
        </Box>
    );
};
