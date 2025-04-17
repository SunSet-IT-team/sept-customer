import {Button} from '@mui/material';
import {FC} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useActions} from '../../../hooks/useActions';
import {newOrderSlice} from '../../../app/store/newOrder/newOrder.slice';
import {aboutButtonStyle, chooseButtonStyle} from './styles';
import {BaseExecutorItem} from './BaseExecutorItem';
import {favouritesSlice} from '../../../app/store/favourites/favourites.slice';
import {IExecutor} from '../../../types/executor';

interface IProps {
    executor: IExecutor;
    isFavourite: boolean;
}

/**
 * Обычная карточка исполнителя.
 * Экран - Выбор исполнителя.
 */
export const ExecutorItem: FC<IProps> = ({executor, isFavourite}) => {
    const {service_id} = useParams();
    const {setExecutor} = useActions(newOrderSlice.actions);
    const navigate = useNavigate();

    const handleChoose = () => {
        setExecutor(executor);
        navigate(`/service/${service_id}/new_order/confirm_order`);
    };

    const handleAbout = () => {
        navigate(`/executor/${executor.id}`);
    };

    const {addExecutor, removeExecutor} = useActions(favouritesSlice.actions);

    const toggleFavourite = () => {
        if (isFavourite) {
            removeExecutor(executor);
        } else {
            addExecutor(executor);
        }
    };

    return (
        <BaseExecutorItem
            executor={executor}
            isFavourite={isFavourite}
            handleFavouriteIconClick={toggleFavourite}
            mainBtn={
                <Button
                    color="secondary"
                    sx={chooseButtonStyle}
                    onClick={handleChoose}
                >
                    Выбрать
                </Button>
            }
            secondBtn={
                <Button
                    color="primary"
                    sx={aboutButtonStyle}
                    onClick={handleAbout}
                >
                    Подробнее
                </Button>
            }
        />
    );
};
