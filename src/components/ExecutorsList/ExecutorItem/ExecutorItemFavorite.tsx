import {Button} from '@mui/material';
import {FC, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {aboutButtonStyle, chooseButtonStyle} from './styles';
import {BaseExecutorItem} from './BaseExecutorItem';
import {IExecutor} from '../../../types/executor';

interface IProps {
    executor: IExecutor;
}

/**
 * Карточка избранного исполнителя.
 * Экран - Личный профиль - Избранное
 */
export const ExecutorItemFavourite: FC<IProps> = ({executor}) => {
    const [isFavourite, setFavourite] = useState<boolean>(true);

    const navigate = useNavigate();

    // Если нужна возможность кликать на данном экране по иконке сердечка
    const toggleFavourite = () => {
        setFavourite(true);
        // setFavourite(isFavourite => !isFavourite)
    };

    const handleDelete = () => {
        setFavourite(false);
    };

    const handleAbout = () => {
        navigate(`/executor/${executor.id}`);
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
                    onClick={handleDelete}
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
