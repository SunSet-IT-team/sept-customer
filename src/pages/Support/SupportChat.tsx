import {useSearchParams} from 'react-router-dom';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getSupportChat} from '../../app/store/user/selectors';
import {Box} from '@mui/material';

/**
 * Страница чата поддержки
 */
const SupportChat = () => {
    const [searchParams] = useSearchParams();
    const question = searchParams.get('question');

    const chatData = useTypedSelector(getSupportChat);

    if (!chatData) return <>Какая-то ошибка</>;

    const {additionalInfo, ...chat} = chatData;

    return <Box sx={{height: '100dvh'}}></Box>;
};

export default SupportChat;
