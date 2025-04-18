import {FC} from 'react';
import {
    Box,
    Divider,
    Rating,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import {useStyles} from './styles';
import {IReview} from '../../../types/executor';

interface IProps {
    review: IReview;
}

/**
 * Отзывы у исполнителя на странице
 */
export const ExecutorReviewItem: FC<IProps> = ({review}) => {
    const styles = useStyles();

    return (
        <Box>
            {/* Заголовок и рейтинг */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
            >
                <Typography fontWeight={600}>{review.author.name}</Typography>
                <Rating readOnly value={review.rating} />
            </Stack>

            {/* Линия под заголовком */}
            <Divider color="#000" sx={{mb: '10px'}} />

            <TextField
                fullWidth
                multiline
                rows={4}
                variant="standard"
                value={review.text}
                sx={styles.textFieldSx}
                slotProps={{input: {disableUnderline: true, readOnly: true}}}
            />
        </Box>
    );
};
