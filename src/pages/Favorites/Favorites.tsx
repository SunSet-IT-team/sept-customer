import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {
    ExecutorItemType,
    ExecutorsList,
} from '../../components/ExecutorsList/ExecutorsList';
import {Spinner} from '../../components/Spinner/Spinner';
import {useFetchExecutors} from '../../hooks/Executors/useFetchExecutors';
import {BackLayout} from '../layouts/BackLayout';

/**
 * КОСТЫЛЬ - ПЕРЕДЕЛАТЬ
 */
export const Favorites: FC = () => {
    const {executors, isLoading, ref} = useFetchExecutors();

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
