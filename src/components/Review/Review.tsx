import {Box, Divider, Rating, Stack, Typography} from '@mui/material';
import {FC, useState} from 'react';

interface IProps {
    username: string;
    rating: number;
    text: string;
    isMyReview: boolean;
}

export const Review: FC<IProps> = ({rating, text, username}) => {
    const [showFullText, setShowFullText] = useState<boolean>(false);
    return (
        <Box>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                mb={'10px'}
            >
                <Typography fontWeight={500}>{username}</Typography>
                <Rating name="review-rating" value={rating} />
            </Stack>
            <Divider />
            <Typography
                mt={'5px'}
                color="primary"
                sx={{
                    color: '#7E7E7E',
                }}
            >
                {text.length > 300 ? (
                    showFullText ? (
                        <>
                            {text}
                            <Typography
                                variant="body1"
                                onClick={() => setShowFullText(false)}
                            >
                                Скрыть
                            </Typography>
                        </>
                    ) : (
                        <>
                            {text.slice(0, 300).concat('...')}
                            <Typography
                                variant="body1"
                                onClick={() => setShowFullText(true)}
                            >
                                Показать больше
                            </Typography>
                        </>
                    )
                ) : (
                    text
                )}
            </Typography>
        </Box>
    );
};
