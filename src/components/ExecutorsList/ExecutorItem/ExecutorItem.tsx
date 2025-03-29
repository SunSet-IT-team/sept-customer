import StarIcon from '@mui/icons-material/Star';
import {Box, Button, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useActions} from '../../../hooks/useActions';
import {newOrderSlice} from '../../../store/new_order/new_order.slice';
import {ToggleExecutorFavourite} from '../../ToggleExecutorFavourite/ToggleExecutorFavourite';
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
            <Box
                width={'90px'}
                height={'90px'}
                borderRadius={'20px'}
                position={'relative'}
            >
                <img
                    src={imgUrl}
                    alt={`${title} картинка`}
                    style={{
                        borderRadius: '20px',
                        width: '90px',
                        height: '90px',
                    }}
                />
                <ToggleExecutorFavourite
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        border: '1px solid black',
                    }}
                    executor={executor}
                    isFavourite={isFavourite}
                />
            </Box>
            <Stack justifyContent={'space-between'} width={'100%'}>
                <Stack justifyContent={'space-between'} direction={'row'}>
                    <Stack>
                        <Typography>{title}</Typography>
                        <Typography>{reviewsCount} отзывов</Typography>
                    </Stack>
                    <Box>
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            gap={'2px'}
                        >
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
                        sx={{
                            backgroundColor: 'secondary.main',
                            color: 'white',
                            fontSize: '14px',
                            textTransform: 'none',
                            width: '50%',
                        }}
                        onClick={handleChoose}
                    >
                        Выбрать
                    </Button>
                    <Button
                        color="primary"
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'black',
                            fontSize: '14px',
                            textTransform: 'none',
                            width: '50%',
                        }}
                        onClick={handleAbout}
                    >
                        Подробнее
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
};
