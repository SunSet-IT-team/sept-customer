import {Box, Button, Stack, TextField, useTheme} from '@mui/material';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getSupportChat} from '../../app/store/user/selectors';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ChatUser, ChatHeader} from 'sunset-chat';
import {Helmet} from 'react-helmet-async';
import {useHandleBack} from '../../hooks/useHandleBack';
import {SERVICES} from '../../api';
import LoadPage from '../LoadPage';

/**
 * Страница перед обращением в поддержку
 */
const Support = () => {
    const [isInited, setIsInited] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const theme = useTheme();
    const navigate = useNavigate();
    const [showCustomQuestion, setShowCustomQuestion] = useState(false);
    const [customQuestion, setCustomQuestion] = useState('');

    const {handleBack} = useHandleBack();

    useEffect(() => {
        const f = async () => {
            try {
                const data = await SERVICES.ChatService.getAdminChat();
                if (data.success) navigate(`/support/${data.data.id}`);
            } catch (error) {
                console.log(error);
                setIsInited(true);
            }
        };
        f();
    }, []);

    if (!isInited) return <LoadPage />;

    const questions = [
        'Вопросы по оплате',
        'Вопросы по заказу',
        'Проблемы с личным кабинетом',
    ];

    const handleQuestionClick = async (param: string) => {
        if (!param.trim() || isLoading) return;

        setIsLoading(true);

        const data = await SERVICES.ChatService.createAdminChat(param);
        if (data.success) navigate(`/support/${data.data.id}`);

        setIsLoading(false);
    };

    const handleCustomQuestionSubmit = async () => {
        if (!customQuestion.trim() || isLoading) return;

        setIsLoading(true);

        const data = await SERVICES.ChatService.createAdminChat(customQuestion);
        if (data.success) navigate(`/support/${data.data.id}`);

        setIsLoading(false);
    };

    const supportChatUser: ChatUser = {
        id: 0,
        name: 'Поддержка',
        imagePath: '/support.png',
    };

    return (
        <>
            <Helmet>
                <title>Обращение к поддержке</title>
            </Helmet>
            <Box
                sx={{
                    minHeight: '100dvh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <ChatHeader chatUser={supportChatUser} />
                <Box
                    sx={{
                        p: 4,
                        flexGrow: 1,
                        flexDirection: 'column',
                        display: 'flex',
                        overflowY: 'auto',
                    }}
                >
                    {/* Категории вопросов */}

                    <Box
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Stack direction="row" flexWrap="wrap" gap={2}>
                            {questions.map((question) => (
                                <Button
                                    key={question}
                                    variant="contained"
                                    loading={isLoading}
                                    onClick={() =>
                                        handleQuestionClick(question)
                                    }
                                    sx={{
                                        textTransform: 'none',
                                        whiteSpace: 'nowrap',
                                        border: 'solid 1px black',
                                        p: 2,
                                        color: 'black',
                                        background: '#3975CF33',
                                    }}
                                >
                                    {question}
                                </Button>
                            ))}
                        </Stack>

                        {/* Блок своего вопроса */}
                        {!showCustomQuestion ? (
                            <Button
                                loading={isLoading}
                                fullWidth
                                variant="contained"
                                onClick={() => setShowCustomQuestion(true)}
                                sx={{
                                    mt: 2,
                                    textTransform: 'none',
                                    border: 'solid 1px black',
                                    color: 'black',
                                    background: '#3975CF33',
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
                                    onChange={(e) =>
                                        setCustomQuestion(e.target.value)
                                    }
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
                    <Button
                        loading={isLoading}
                        fullWidth
                        onClick={handleBack}
                        variant="contained"
                        sx={{mt: 2, alignSelf: 'end'}}
                    >
                        Назад
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Support;
