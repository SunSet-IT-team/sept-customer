import {Stack, Box, Typography} from '@mui/material';
import {useFetchReviews} from '../../hooks/Review/useFetchReviews';
import {Spinner} from '../Spinner/Spinner';
import {ExecutorReviewItem} from './ExecutorReviewItem/ExecutorReviewItem';

interface IProps {
    executorId: number | string;
}

/**
 * Отображение отзывов исполнителя
 */
const ExecutorReviewList = ({executorId}: IProps) => {
    const {reviews, isLoading, ref} = useFetchReviews({
        targetId: Number(executorId),
    });

    if (!reviews) {
        return <Spinner />;
    }

    if (!isLoading && !reviews.length)
        return <Typography>У этого исполнителя пока нет отзывов</Typography>;

    return (
        <Stack spacing={'45px'}>
            {reviews.map((review) => {
                return <ExecutorReviewItem review={review} key={review.id} />;
            })}
            <Box ref={ref}></Box>
            {isLoading && <Spinner />}
        </Stack>
    );
};

export default ExecutorReviewList;
