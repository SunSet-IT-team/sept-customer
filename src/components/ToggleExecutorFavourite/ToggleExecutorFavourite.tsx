import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Box, SxProps, Theme} from '@mui/material';
import {FC} from 'react';
import {useActions} from '../../hooks/useActions';
import {favouritesSlice} from '../../store/favourites/favourites.slice';
import {IExecutorShort} from '../../types/executor';

interface IProps {
    executor: IExecutorShort;
    isFavourite: boolean;
    sx?: SxProps<Theme>;
}

export const ToggleExecutorFavourite: FC<IProps> = ({
    executor,
    isFavourite,
    sx,
}) => {
    const {addExecutor, removeExecutor} = useActions(favouritesSlice.actions);

    const toggleFavourite = () => {
        if (isFavourite) {
            removeExecutor(executor);
        } else {
            addExecutor(executor);
        }
    };

    return (
        <Box sx={sx} onClick={toggleFavourite}>
            {isFavourite ? (
                <FavoriteIcon sx={{color: 'secondary.main'}} />
            ) : (
                <FavoriteBorderIcon sx={{color: 'secondary.main'}} />
            )}
        </Box>
    );
};
