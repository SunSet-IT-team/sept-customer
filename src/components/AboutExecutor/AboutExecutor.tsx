import StarIcon from '@mui/icons-material/Star';
import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {useParams} from 'react-router-dom';
import {Review} from '../Review/Review';
import {Spinner} from '../Spinner/Spinner';
import {BackLayout} from '../../pages/layouts/BackLayout';
import {Helmet} from 'react-helmet';
import ExecutorAvatar from '../../feature/ExecutorAvatar';
import {useStyles} from './styles';
import {useFetchExecutorById} from '../../hooks/Executors/useFetchExecutorById';
import ExecutorReviewList from '../ExecutorReviewList';

export const AboutExecutor: FC = () => {
    const {executorId} = useParams();

    const {data: executor, isLoading} = useFetchExecutorById(executorId);

    const styles = useStyles();

    if (isLoading || !executor || !executorId) {
        return <Spinner />;
    }

    return (
        <>
            <Helmet>
                <title>{`Исполнитель ${executor.title}`}</title>
            </Helmet>
            <BackLayout title=" ">
                <Box sx={styles.box}>
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        <ExecutorAvatar
                            imagePath={executor.profileImg}
                            size={140}
                            execuotorId={executor.id}
                            alt={executor.title}
                        />
                        <Box sx={styles.ratingBoxStyle}>
                            <Stack sx={styles.ratingStackStyle}>
                                <StarIcon color="secondary" fontSize="small" />
                                <Typography>
                                    {executor.averageRating}
                                </Typography>
                                <Typography>
                                    {executor.reviewsCount} оценок
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
                    <Typography variant="h1" sx={styles.companyNameStyle}>
                        {executor.title}
                    </Typography>

                    <Stack sx={styles.infoBoxStyle}>
                        <Box
                            sx={styles.infoBoxItemStyle}
                            borderRight={'1px solid black'}
                        >
                            <Typography variant="body2">
                                {executor.experience}
                            </Typography>
                            <Typography variant="body2">лет стажа</Typography>
                        </Box>
                        <Box
                            sx={styles.infoBoxItemStyle}
                            borderRight={'1px solid black'}
                        >
                            <Typography variant="body2">
                                {executor.callsCount}
                            </Typography>
                            <Typography variant="body2">вызов</Typography>
                        </Box>
                        <Box sx={styles.infoBoxItemStyle}>
                            <Typography variant="body2">
                                {executor.reviewsCount}
                            </Typography>
                            <Typography variant="body2">отзыва</Typography>
                        </Box>
                    </Stack>

                    <Box sx={styles.descriptionBoxStyle}>
                        <Typography variant="h5">Данные о компании</Typography>
                        <Typography>{executor.description}</Typography>
                    </Box>
                    <Box sx={styles.reviewsBoxStyle}>
                        <Typography variant="h5">Отзывы</Typography>
                        <ExecutorReviewList executorId={executorId} />
                    </Box>
                </Box>
            </BackLayout>
        </>
    );
};
