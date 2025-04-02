import StarIcon from '@mui/icons-material/Star';
import {Box, Button, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useActions} from '../../../hooks/useActions';
import {newOrderSlice} from '../../../store/new_order/new_order.slice';
import {ToggleExecutorFavourite} from '../../ToggleExecutorFavourite/ToggleExecutorFavourite';
import {
    aboutButtonStyle,
    chooseButtonStyle,
    imageContainerStyle,
    imageStyle,
    infoContainerStyle,
    ratingContainerStyle,
    toggleFavouriteStyle,
} from './styles';
interface IProps {
    executor: {
        id: number;
        title: string;
        reviewsCount: number;
        averageRating: number;
        imgUrl: string;
    };
    isFavourite: boolean;
}

export const ExecutorItem: FC<IProps> = ({executor, isFavourite}) => {
    const {service_id} = useParams();
    const {setExecutor} = useActions(newOrderSlice.actions);
    const {averageRating, imgUrl, reviewsCount, title} = executor;
    const navigate = useNavigate();

    const handleChoose = () => {
        setExecutor(executor);
        navigate(`/service/${service_id}/new_order/confirm_order`);
    };

    const handleAbout = () => {
        navigate(`/executor/${executor.id}`);
    };

    return (
        <Stack direction={'row'} gap={'10px'}>
            <Box sx={imageContainerStyle}>
                <img
                    src={imgUrl}
                    alt={`${title} картинка`}
                    style={imageStyle}
                />
                <ToggleExecutorFavourite
                    sx={toggleFavouriteStyle}
                    executor={executor}
                    isFavourite={isFavourite}
                />
            </Box>
            <Stack sx={infoContainerStyle}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack>
                        <Typography>{title}</Typography>
                        <Typography>{reviewsCount} отзывов</Typography>
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
                    <Button
                        color="secondary"
                        sx={chooseButtonStyle}
                        onClick={handleChoose}
                    >
                        Выбрать
                    </Button>
                    <Button
                        color="primary"
                        sx={aboutButtonStyle}
                        onClick={handleAbout}
                    >
                        Подробнее
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};
