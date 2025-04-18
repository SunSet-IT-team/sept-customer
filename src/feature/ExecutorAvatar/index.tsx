import {ToggleExecutorFavourite} from '../../components/ToggleExecutorFavourite/ToggleExecutorFavourite';
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
    const styles = useStyles();

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
                isFavourite={false}
                sx={styles.favouriteIconStyle}
            />
        </Box>
    );
};

export default ExecutorAvatar;
