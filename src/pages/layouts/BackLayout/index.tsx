import {FC, ReactNode} from 'react';
import {Box, SxProps} from '@mui/material';
import {useStyles} from './styles';
import {PageTitle} from '../../../components/PageTitle/PageTitle';
import { Theme } from '@emotion/react';

type BackLayoutProps = {
    title?: string;
    sxTitle?: SxProps<Theme>
    children: ReactNode;
};

/**
 * Добавляет сверху кнопку "назад"
 */
export const BackLayout: FC<BackLayoutProps> = ({title, children, sxTitle}) => {
    const styles = useStyles(sxTitle);

    return (
        <Box sx={styles.pageContainer}>
            {title && <PageTitle title={title} sx={styles.title} />}
            <Box sx={styles.content}>{children}</Box>
        </Box>
    );
};
