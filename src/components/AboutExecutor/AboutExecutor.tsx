import StarIcon from '@mui/icons-material/Star';
import {Box, Stack, Typography} from '@mui/material';
import {useQuery} from '@tanstack/react-query';
import {FC} from 'react';
import {useParams} from 'react-router-dom';
import {SERVICES} from '../../api';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {PageTitle} from '../PageTitle/PageTitle';
import {Review} from '../Review/Review';
import {Spinner} from '../Spinner/Spinner';
import {ToggleExecutorFavourite} from '../ToggleExecutorFavourite/ToggleExecutorFavourite';
import {
    companyNameStyle,
    descriptionBoxStyle,
    executorImageContainerStyle,
    executorImageStyle,
    favouriteIconStyle,
    infoBoxItemStyle,
    infoBoxStyle,
    ratingBoxStyle,
    ratingStackStyle,
    reviewsBoxStyle,
} from './styles';

export const AboutExecutor: FC = () => {
    const {executor_id} = useParams();
    if (!executor_id) {
        return <Spinner />;
    }
    const {data: executor, isLoading} = useQuery({
        queryFn: () => SERVICES.ExecutorService.getExecutorById(+executor_id),
        queryKey: ['get executor by id'],
        enabled: !!executor_id,
    });

    const {executors: favouriteExecutors} = useTypedSelector(
        (state) => state.favourites
    );

    if (isLoading || !executor) {
        return <Spinner />;
    }
    const {
        averageRating,
        callsCount,
        description,
        experience,
        reviews,
        title,
        reviewsCount,
        ratingsCount,
    } = executor;

    const isFavourite = favouriteExecutors.some(
        (favourite_executor) => favourite_executor.id === executor.id
    );

    return (
        <Box p={'30px'}>
            <PageTitle title="" />
            <Stack justifyContent={'center'} alignItems={'center'}>
                <Box sx={executorImageContainerStyle}>
                    <img src="" alt="" style={executorImageStyle} />
                    <ToggleExecutorFavourite
                        executor={executor}
                        isFavourite={isFavourite}
                        sx={favouriteIconStyle}
                    />
                </Box>
                <Box sx={ratingBoxStyle}>
                    <Stack sx={ratingStackStyle}>
                        <StarIcon color="secondary" fontSize="small" />
                        <Typography>{averageRating}</Typography>
                        <Typography>{ratingsCount} оценок</Typography>
                    </Stack>
                </Box>
            </Stack>
            <Typography variant="h1" sx={companyNameStyle}>
                {title}
            </Typography>

            <Stack sx={infoBoxStyle}>
                <Box sx={infoBoxItemStyle} borderRight={'1px solid black'}>
                    <Typography variant="body2" fontWeight={500}>
                        {experience}
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                        лет стажа
                    </Typography>
                </Box>
                <Box sx={infoBoxItemStyle} borderRight={'1px solid black'}>
                    <Typography variant="body2" fontWeight={500}>
                        {callsCount}
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                        вызов
                    </Typography>
                </Box>
                <Box sx={infoBoxItemStyle}>
                    <Typography variant="body2" fontWeight={500}>
                        {reviewsCount}
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                        отзыва
                    </Typography>
                </Box>
            </Stack>

            <Box sx={descriptionBoxStyle}>
                <Typography variant="h6" fontWeight={'500'}>
                    Данные о компании
                </Typography>
                <Typography mt={'20px'}>{description}</Typography>
            </Box>
            <Box sx={reviewsBoxStyle}>
                <Typography variant="h6" fontWeight={'500'}>
                    Отзывы
                </Typography>
                <Stack gap={'20px'} mt={'20px'}>
                    {reviews.map((review) => (
                        <Review
                            isMyReview={false}
                            rating={review.rating}
                            text={review.text}
                            username={review.username}
                            key={review.id + review.username}
                        />
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};
