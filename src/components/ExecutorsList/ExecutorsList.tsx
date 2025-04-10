import {Box, Stack} from '@mui/material';
import {FC, RefCallback} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {IExecutorShort} from '../../types/executor';
import {ExecutorItem} from './ExecutorItem/ExecutorItem';

interface IProps {
    executors: IExecutorShort[];
    observedRef: RefCallback<HTMLDivElement>;
}

/**
 * @TODO вынести исполнителя в отдельный компонент и отдельный нормальный тип
 */
export const ExecutorsList: FC<IProps> = ({executors, observedRef}) => {
    const {executors: favouriteExecutors} = useTypedSelector(
        (state) => state.favourites
    );
    return (
        <Stack gap={'10px'}>
            {executors.map((executor, index) => {
                const isFavourite = favouriteExecutors.some(
                    (favourite_executor) =>
                        favourite_executor.id === executor.id
                );
                return (
                    <Box
                        ref={
                            index === executors.length - 4 ? observedRef : null
                        }
                        key={executor.title + executor.id}
                    >
                        <ExecutorItem
                            executor={executor}
                            isFavourite={isFavourite}
                        />
                    </Box>
                );
            })}
        </Stack>
    );
};
