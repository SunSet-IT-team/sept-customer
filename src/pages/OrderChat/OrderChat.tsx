import {Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Chat} from '../../components/Chat/Chat';

export const OrderChat: FC = () => {
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
