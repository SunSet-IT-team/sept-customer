import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import {Stack, Typography} from '@mui/material';
import {FC} from 'react';
interface IProps {
    text: string;
    isMyMessage: boolean;
    time: string;
    isRead?: boolean;
}
export const ChatMessage: FC<IProps> = ({isMyMessage, text, time, isRead}) => {
    return (
        <Stack
            p={'10px'}
            maxWidth={'90%'}
            mr={isMyMessage ? '' : 'auto'}
            ml={isMyMessage ? 'auto' : ''}
            borderRadius={'5px'}
            sx={{
                backgroundColor: isMyMessage
                    ? 'secondary.main'
                    : 'primary.main',
                color: isMyMessage ? 'white' : 'black',
            }}
        >
            <Typography fontSize={'14px'}>{text}</Typography>
            <Stack
                direction={'row'}
                justifyContent={'end'}
                gap={'5px'}
                alignItems={'center'}
                mt={'5px'}
            >
                <Typography fontSize={'10px'}>{time}</Typography>
                {isRead && isMyMessage && (
                    <DoneAllRoundedIcon fontSize="small" />
                )}
            </Stack>
        </Stack>
    );
};
