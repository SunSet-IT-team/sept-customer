import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {
    ExecutorItemType,
    ExecutorsList,
} from '../../components/ExecutorsList/ExecutorsList';
import {Spinner} from '../../components/Spinner/Spinner';
import {BackLayout} from '../layouts/BackLayout';
import {useFetchFavoriteExecutors} from '../../hooks/Executors/useFetchFavoriteExecutors';

/**
 * КОСТЫЛЬ - ПЕРЕДЕЛАТЬ
 */
export const Favorites: FC = () => {
    const {executors, isLoading, ref} = useFetchFavoriteExecutors();

    if (isLoading || !executors) {
        return <Spinner />;
    }

    return (
        <>
            <Helmet>
                <title>Избранное</title>
            </Helmet>
            <BackLayout title="Избранное">
                {executors && executors.length === 0 && !isLoading && (
                    <Typography variant="h6" sx={{textAlign: 'center', my: 2}}>
                        Вы пока ничего не добавили в Избранное
                    </Typography>
                )}
                <Box>
                    <ExecutorsList
                        itemType={ExecutorItemType.FAVORITE}
                        executors={executors}
                        observedRef={ref}
                    />
                    {isLoading && <Spinner />}
                </Box>
            </BackLayout>
        </>
    );
};
