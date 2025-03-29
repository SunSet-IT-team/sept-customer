import {Box, Stack, Typography} from '@mui/material';
import {FC, ReactNode} from 'react';

interface IProps {
    interlocutor: {
        name: string;
        imgUrl: string;
    };
    componentAboveChat?: ReactNode;
}

export const Chat: FC<IProps> = ({interlocutor, componentAboveChat}) => {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
            }}
        >
            <Stack>
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
                <Typography textAlign={'center'}>
                    {interlocutor.name}
                </Typography>
            </Stack>
        </Box>
    );
};
