import {Avatar, Box, Stack, Typography} from '@mui/material';
import {useStyles} from './styles';
import {Chat} from '../../../types/chat';

type ChatHeaderProps = {
    interlocutor: Chat['interlocutor'];
};

const ChatHeader = ({interlocutor}: ChatHeaderProps) => {
    const styles = useStyles();

    return (
        <Box sx={styles.chatHeader}>
            <Stack sx={styles.chatHeaderUser}>
                <Avatar src="" alt="" sx={styles.chatHeaderUserImage} />
                <Typography sx={styles.chatHeaderUserName}>
                    {interlocutor.name}
                </Typography>
            </Stack>
        </Box>
    );
};

export default ChatHeader;
