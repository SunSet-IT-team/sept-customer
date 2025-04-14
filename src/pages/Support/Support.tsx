import {
    Box,
    Button,
    Stack,
    TextField,
    Typography,
    useTheme,
} from '@mui/material';
import ChatHeader from '../../components/ChatForm/ui/ChatHeader';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getSupportChat} from '../../store/user/selectors';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

/**
 * Страница перед обращением в поддержку
 */
const Support = () => {
    const chat = useTypedSelector(getSupportChat);

    const theme = useTheme();
    const navigate = useNavigate();
    const [showCustomQuestion, setShowCustomQuestion] = useState(false);
    const [customQuestion, setCustomQuestion] = useState('');

    const questions = [
        'Вопросы по оплате',
        'Вопросы по заказу',
        'Проблемы с личным кабинетом',
    ];

    const handleQuestionClick = (param: string) => {
        navigate(`/support/chat?question=${encodeURIComponent(param)}`);
    };

    const handleCustomQuestionSubmit = () => {
        if (customQuestion.trim()) {
            navigate(
                `/support/chat?question=${encodeURIComponent(customQuestion)}`
            );
        }
    };
    return (
        <Box sx={{height: '100dvh'}}>
            {chat?.interlocutor && (
                <ChatHeader interlocutor={chat.interlocutor} />
            )}
            <Box sx={{p: 4}}>
                {/* Категории вопросов */}

                <Stack direction="row" flexWrap="wrap" gap={2}>
                    {questions.map((question) => (
                        <Button
                            key={question}
                            variant="contained"
                            onClick={() => handleQuestionClick(question)}
                            sx={{
                                textTransform: 'none',
                                whiteSpace: 'nowrap',
                                border: 'solid 1px black',
                                p: 2,
                            }}
                        >
                            {question}
                        </Button>
                    ))}
                </Stack>

                {/* Блок своего вопроса */}
                {!showCustomQuestion ? (
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => setShowCustomQuestion(true)}
                        sx={{
                            mt: 2,
                            textTransform: 'none',
                            border: 'solid 1px black',
                            p: 2,
                        }}
                    >
                        Задать свой вопрос
                    </Button>
                ) : (
                    <Box sx={{mt: 3}}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            placeholder="Опишите ваш вопрос..."
                            value={customQuestion}
                            onChange={(e) => setCustomQuestion(e.target.value)}
                            sx={{mb: 2}}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleCustomQuestionSubmit}
                            disabled={!customQuestion.trim()}
                        >
                            Продолжить
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Support;
