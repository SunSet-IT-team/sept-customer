import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Box, SxProps, Theme} from '@mui/material';
import {FC} from 'react';
import {IExecutor} from '../../types/executor';

interface IProps {
    executor: IExecutor;
    isFavourite: boolean;
    sx?: SxProps<Theme>;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const ToggleExecutorFavourite: FC<IProps> = ({
    isFavourite,
    sx,
    onClick,
}) => {
    return (
        <Box sx={sx} onClick={onClick}>
            {isFavourite ? (
                <FavoriteIcon sx={{color: 'secondary.main'}} />
            ) : (
                <FavoriteBorderIcon sx={{color: 'secondary.main'}} />
            )}
        </Box>
    );
};
