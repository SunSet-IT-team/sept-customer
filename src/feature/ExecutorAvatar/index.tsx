import {useQueryClient} from '@tanstack/react-query';
import {useAppDispatch} from '../../app/store/store';
import {getFavoriteIds} from '../../app/store/user/selectors';
import {toggleFavorite} from '../../app/store/user/thunk';
import {ToggleExecutorFavourite} from '../../components/ToggleExecutorFavourite/ToggleExecutorFavourite';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useStyles} from './styles';
import {Avatar, Box} from '@mui/material';

interface IProps {
    imagePath?: string;
    size?: number;
    alt?: string;
    execuotorId: number | string;
}

/**
 * Аватар с кнопкой "добавить в избранное"
 */
const ExecutorAvatar = (avatar: IProps) => {
    const favorites = useTypedSelector(getFavoriteIds);
    const dispatch = useAppDispatch();
    const styles = useStyles();
    const queryClient = useQueryClient();

    const isFavourite = !!favorites.find(
        (el) => el === Number(avatar.execuotorId)
    );

    const handleClick = () => {
        dispatch(toggleFavorite(Number(avatar.execuotorId)));
        queryClient.invalidateQueries({
            queryKey: ['executor favorite'],
        });
    };

    return (
        <Box sx={styles.box}>
            <Avatar
                src={avatar.imagePath}
                alt={avatar.alt}
                sx={{
                    ...styles.image,
                    minWidth: avatar.size,
                    width: avatar.size,
                    height: avatar.size,
                }}
            />
            <ToggleExecutorFavourite
                isFavourite={isFavourite}
                sx={styles.favouriteIconStyle}
                onClick={handleClick}
            />
        </Box>
    );
};

export default ExecutorAvatar;
