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
                <Box position={'relative'}>
                    <img
                        src=""
                        alt=""
                        style={{
                            width: 143,
                            height: 143,
                            backgroundColor: '#7D7D7D',
                            borderRadius: '20px',
                        }}
                    />
                    <ToggleExecutorFavourite
                        executor={executor}
                        isFavourite={isFavourite}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            width: '30px',
                            height: '30px',
                            border: '1px solid black',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    />
                </Box>
                <Box
                    px={'4px'}
                    py={'8px'}
                    border={'1px solid black'}
                    borderRadius={'20px'}
                    mt={'-10px'}
                    position={'relative'}
                    sx={{
                        backgroundColor: 'white',
                    }}
                >
                    <Stack
                        direction={'row'}
                        gap={'5px'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <StarIcon color="secondary" fontSize="small" />
                        <Typography>{averageRating}</Typography>
                        <Typography>{ratingsCount} оценок</Typography>
                    </Stack>
                </Box>
            </Stack>
            <Typography
                textAlign={'center'}
                variant="h1"
                fontSize={'16px'}
                fontWeight={'500'}
                py={'20px'}
            >
                {title}
            </Typography>

            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                px={'16px'}
                py={'8px'}
                border={'1px solid black'}
                borderRadius={'20px'}
                sx={{
                    backgroundColor: 'primary.main',
                }}
            >
                <Box width={'100%'} sx={{borderRight: '1px solid black'}}>
                    <Typography
                        variant="body2"
                        fontWeight={500}
                        textAlign={'center'}
                    >
                        {experience}
                    </Typography>
                    <Typography
                        variant="body2"
                        fontWeight={500}
                        textAlign={'center'}
                    >
                        лет стажа
                    </Typography>
                </Box>
                <Box width={'100%'} sx={{borderRight: '1px solid black'}}>
                    <Typography
                        variant="body2"
                        fontWeight={500}
                        textAlign={'center'}
                    >
                        {callsCount}
                    </Typography>
                    <Typography
                        variant="body2"
                        fontWeight={500}
                        textAlign={'center'}
                    >
                        вызов
                    </Typography>
                </Box>
                <Box width={'100%'}>
                    <Typography
                        variant="body2"
                        fontWeight={500}
                        textAlign={'center'}
                    >
                        {reviewsCount}
                    </Typography>
                    <Typography
                        variant="body2"
                        fontWeight={500}
                        textAlign={'center'}
                    >
                        отзыва
                    </Typography>
                </Box>
            </Stack>

            <Box mt={'37px'}>
                <Typography variant="h6" fontWeight={'500'}>
                    Данные о компании
                </Typography>
                <Typography mt={'20px'}>{description}</Typography>
            </Box>
            <Box mt={'20px'}>
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
