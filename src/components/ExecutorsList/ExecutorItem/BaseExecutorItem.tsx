import StarIcon from '@mui/icons-material/Star';
import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {
    imageContainerStyle,
    infoContainerStyle,
    ratingContainerStyle,
} from './styles';
import {IExecutor} from '../../../types/executor';
import {getReviewsWord} from '../../../utils/formaters';
import ExecutorAvatar from '../../../feature/ExecutorAvatar';

interface IProps {
    executor: IExecutor;

    mainBtn: React.ReactNode;
    secondBtn: React.ReactNode;
}

/**
 * Базовая карточка исполнителя
 */
export const BaseExecutorItem: FC<IProps> = ({
    executor,
    mainBtn,
    secondBtn,
}) => {
    const {averageRating, profileImg, reviewsCount, title} = executor;

    return (
        <Stack direction={'row'} gap={'10px'}>
            <Box sx={imageContainerStyle}>
                <ExecutorAvatar
                    imagePath={profileImg}
                    size={90}
                    execuotorId={executor.id}
                    alt={title}
                />
            </Box>
            <Stack sx={infoContainerStyle}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack>
                        <Typography fontSize={'14px'}>{title}</Typography>
                        <Typography fontSize={'14px'}>
                            {reviewsCount} {getReviewsWord(reviewsCount)}
                        </Typography>
                    </Stack>
                    <Box>
                        <Stack sx={ratingContainerStyle}>
                            <StarIcon color="secondary" fontSize="small" />
                            <Typography variant="body2">
                                {averageRating}
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    gap={'10px'}
                >
                    {mainBtn}
                    {secondBtn}
                </Stack>
            </Stack>
        </Stack>
    );
};
