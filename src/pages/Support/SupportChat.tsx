import {useSearchParams} from 'react-router-dom';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getSupportChat} from '../../store/user/selectors';
import {ChatForm} from '../../components/ChatForm/ui/Chat';
import {Box} from '@mui/material';

/**
 * Страница чата поддержки
 */
const SupportChat = () => {
    const [searchParams] = useSearchParams();
    const question = searchParams.get('question');

    const {additionalInfo, ...chat} = useTypedSelector(getSupportChat);

    if (!chat) return <>Какая-то ошибка</>;

    console.log(chat);

    return (
        <Box sx={{height: '100dvh'}}>
            <ChatForm {...chat} additionalInfo={question} />
        </Box>
    );
};

export default SupportChat;
