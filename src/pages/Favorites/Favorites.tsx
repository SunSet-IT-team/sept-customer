import {Box} from '@mui/material';
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
                <Box>
                    <ExecutorsList
                        itemType={ExecutorItemType.FAVORITE}
                        executors={executors}
                        observedRef={ref}
                    />
                </Box>
            </BackLayout>
        </>
    );
};
