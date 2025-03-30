import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {
    Box,
    Button,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import {FC, ReactNode, useState} from 'react';
import {useHandleBack} from '../../hooks/useHandleBack';
import {ChatMessage} from './ChatMessage';
interface IProps {
    interlocutor: {
        name: string;
        imgUrl: string;
    };
    componentAboveChat?: ReactNode;
}
export const Chat: FC<IProps> = ({interlocutor, componentAboveChat}) => {
    const [message, setMessage] = useState<string>('');
    const {handleBack} = useHandleBack();
    const handleCloseChat = () => {
        handleBack();
    };

    const handleSend = () => {};
    const handleAttach = () => {};

    return (
        <Box sx={{height: '100dvh'}} display="flex" flexDirection="column">
            <Box
                sx={{
                    backgroundColor: 'primary.main',
                }}
                position={'sticky'}
                top={0}
                left={0}
                right={0}
            >
                <Stack
                    justifyContent={'center'}
                    alignItems={'center'}
                    py={'15px'}
                >
                    <img
                        src=""
                        alt=""
                        style={{
                            borderRadius: '50%',
                            width: 89,
                            height: 89,
                            backgroundColor: '#4D4D4D',
                        }}
                    />
                    <Typography textAlign={'center'} mt={'10px'}>
                        {interlocutor.name}
                    </Typography>
                </Stack>
            </Box>

            <Stack
                p={'20px'}
                gap={'20px'}
                flexGrow={1}
                overflow={'auto'}
                // mb={'70px'}
            >
                {componentAboveChat}
                <ChatMessage
                    isMyMessage={true}
                    text="Добрый день, хочу уточнить детали: как будет проводиться сборка"
                    time="10:10"
                    isRead={true}
                />
                <ChatMessage
                    isMyMessage={false}
                    text="Добрый, да, конечно, сейчас расскажем"
                    time="10:10"
                    isRead={true}
                />
                <ChatMessage
                    isMyMessage={true}
                    text="Добрый день, хочу уточнить детали: как будет проводиться сборка"
                    time="10:10"
                    isRead={true}
                />
                <ChatMessage
                    isMyMessage={false}
                    text="Добрый, да, конечно, сейчас расскажем"
                    time="10:10"
                    isRead={true}
                />
                <ChatMessage
                    isMyMessage={true}
                    text="Добрый день, хочу уточнить детали: как будет проводиться сборка"
                    time="10:10"
                    isRead={true}
                />
                <ChatMessage
                    isMyMessage={false}
                    text="Добрый, да, конечно, сейчас расскажем"
                    time="10:10"
                    isRead={true}
                />
                <ChatMessage
                    isMyMessage={true}
                    text="Добрый день, хочу уточнить детали: как будет проводиться сборка"
                    time="10:10"
                    isRead={true}
                />
                <ChatMessage
                    isMyMessage={false}
                    text="Добрый, да, конечно, сейчас расскажем"
                    time="10:10"
                    isRead={true}
                />
            </Stack>

            <Stack gap={'10px'} px={'20px'} pb={'20px'}>
                <TextField
                    variant="outlined"
                    fullWidth
                    type={'text'}
                    value={message}
                    placeholder="Написать сообщение..."
                    sx={{
                        '& .MuiInputBase-input': {
                            padding: '10px',
                            '::placeholder': {
                                fontStyle: 'italic',
                                textAlign: 'center',
                                fontSize: '14px',
                            },
                        },
                    }}
                    onChange={(e) => setMessage(e.target.value)}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AddCircleOutlineRoundedIcon
                                        onClick={handleAttach}
                                    />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <img
                                        src="/icons/send.svg"
                                        onClick={handleSend}
                                    />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={handleCloseChat}
                >
                    Закрыть чат
                </Button>
            </Stack>
        </Box>
    );
};
