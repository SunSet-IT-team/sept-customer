import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {useInView} from 'react-intersection-observer';
import {
    ExecutorItemType,
    ExecutorsList,
} from '../../components/ExecutorsList/ExecutorsList';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {Spinner} from '../../components/Spinner/Spinner';
import {useFetchExecutors} from '../../hooks/Executors/useFetchExecutors';

/**
 * КОСТЫЛЬ - ПЕРЕДЕЛАТЬ
 */
export const Favorites: FC = () => {
    const {executors, isLoading, ref} = useFetchExecutors();

    if (isLoading || !executors) {
        return <Spinner />;
    }

    return (
        <Box px={'20px'} py={'26px'}>
            <Helmet>
                <title>Избранное</title>
            </Helmet>
            <PageTitle title="Избранное" />
            <Box mt={'50px'}>
                <ExecutorsList
                    itemType={ExecutorItemType.FAVORITE}
                    executors={executors}
                    observedRef={ref}
                />
            </Box>
        </Box>
    );
};
