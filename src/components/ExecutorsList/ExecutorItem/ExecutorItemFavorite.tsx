import {Button} from '@mui/material';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {aboutButtonStyle, chooseButtonStyle} from './styles';
import {BaseExecutorItem} from './BaseExecutorItem';
import {IExecutor} from '../../../types/executor';
import {useAppDispatch} from '../../../app/store/store';
import {toggleFavorite} from '../../../app/store/user/thunk';
import {useQueryClient} from '@tanstack/react-query';

interface IProps {
    executor: IExecutor;
}

/**
 * Карточка избранного исполнителя.
 * Экран - Личный профиль - Избранное
 */
export const ExecutorItemFavourite: FC<IProps> = ({executor}) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(toggleFavorite(Number(executor.id)));
        queryClient.invalidateQueries({
            queryKey: ['executor favorite'],
        });
    };

    const handleAbout = () => {
        navigate(`/executor/${executor.id}`);
    };

    return (
        <BaseExecutorItem
            executor={executor}
            mainBtn={
                <Button
                    color="secondary"
                    sx={chooseButtonStyle}
                    onClick={handleClick}
                >
                    Удалить
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
