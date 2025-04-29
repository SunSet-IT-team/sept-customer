import {useNavigate} from 'react-router-dom';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getCurrentUser} from '../../app/store/user/selectors';
import {Box} from '@mui/material';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {ChatUser, ChatForm} from 'sunset-chat';
import {SERVICES} from '../../api';
import LoadPage from '../LoadPage';

/**
 * Страница чата поддержки
 */
const SupportChat = () => {
    const [chatData, setChatData] = useState<{
        id: number;
        additionalInfo?: string;
    } | null>(null);
    const user = useTypedSelector(getCurrentUser);

    const navigate = useNavigate();

    useEffect(() => {
        const f = async () => {
            try {
                const data = await SERVICES.ChatService.getAdminChat();
                if (data.success)
                    setChatData({
                        id: data.data.id,
                        additionalInfo: data.data.theme,
                    });
            } catch (error) {
                console.log(error);
            }
        };
        f();
    }, []);

    if (!chatData) return <LoadPage />;

    const supportChatUser: ChatUser = {
        id: 0,
        name: 'Поддержка',
        imagePath: '/support.png',
    };

    const chat = {
        id: chatData.id,
        messages: [],
        chatUser: supportChatUser,
        additionalInfo: chatData.additionalInfo,
        currentUserId: user.id,
        newMessages: 0,
    };

    const handleBack = () => navigate('/');

    return (
        <Box sx={{maxHeight: '100dvh'}}>
            <Helmet>
                <title>Обращение к поддержке</title>
            </Helmet>
            <Box sx={{height: '100dvh'}}>
                <ChatForm chat={chat} handleCloseChat={handleBack} />
            </Box>
        </Box>
    );
};

export default SupportChat;
