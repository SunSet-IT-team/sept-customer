import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {Stack, SxProps, Theme, Typography} from '@mui/material';
import {FC} from 'react';
import {useStyles} from './styles';
import {useHandleBack} from '../../hooks/useHandleBack';

interface IProps {
    title: string;
    sx?: SxProps<Theme>;
}

/**
 * Фича - стрелка  назад с названием странцы
 */
export const PageTitle: FC<IProps> = ({title, sx}) => {
    const {handleBack} = useHandleBack();

    const styles = useStyles();

    const mainSx = {...styles.container, ...sx} as SxProps<Theme>;

    return (
        <Stack sx={mainSx}>
            <ArrowBackIosNewRoundedIcon
                sx={styles.arrow}
                onClick={handleBack}
            />
            <Typography variant="h6" sx={styles.title}>
                {title}
            </Typography>
        </Stack>
    );
};
