import StarIcon from '@mui/icons-material/Star';
import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {ToggleExecutorFavourite} from '../../ToggleExecutorFavourite/ToggleExecutorFavourite';
import {
    imageContainerStyle,
    imageStyle,
    infoContainerStyle,
    ratingContainerStyle,
    toggleFavouriteStyle,
} from './styles';
import {IExecutor} from '../../../types/executor';

interface IProps {
    executor: IExecutor;
    handleFavouriteIconClick?: (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
    isFavourite: boolean;
    mainBtn: React.ReactNode;
    secondBtn: React.ReactNode;
}

/**
 * Базовая карточка исполнителя
 */
export const BaseExecutorItem: FC<IProps> = ({
    executor,
    isFavourite,
    handleFavouriteIconClick,
    mainBtn,
    secondBtn,
}) => {
    const {averageRating, profileImg, reviewsCount, title} = executor;

    return (
        <Stack direction={'row'} gap={'10px'}>
            <Box sx={imageContainerStyle}>
                <Box
                    component="img"
                    alt={`${title} картинка`}
                    sx={imageStyle}
                    src={profileImg}
                />
                <ToggleExecutorFavourite
                    sx={toggleFavouriteStyle}
                    executor={executor}
                    isFavourite={isFavourite}
                    onClick={handleFavouriteIconClick}
                />
            </Box>
            <Stack sx={infoContainerStyle}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack>
                        <Typography fontSize={'14px'}>{title}</Typography>
                        <Typography fontSize={'14px'}>
                            {reviewsCount} отзывов
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
