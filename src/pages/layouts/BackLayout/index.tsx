import {FC, ReactNode} from 'react';
import {Box} from '@mui/material';
import {useStyles} from './styles';
import {PageTitle} from '../../../components/PageTitle/PageTitle';

type BackLayoutProps = {
    title?: string;
    children: ReactNode;
};

/**
 * Добавляет сверху кнопку "назад"
 */
export const BackLayout: FC<BackLayoutProps> = ({title, children}) => {
    const styles = useStyles();

    return (
        <Box sx={styles.pageContainer}>
            {title && <PageTitle title={title} sx={styles.title} />}
            <Box sx={styles.content}>{children}</Box>
        </Box>
    );
};
