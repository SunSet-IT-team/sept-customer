import {Stack} from '@mui/material';
import {FC} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {IExecutorShort} from '../../types/executor';
import {ExecutorItem} from './ExecutorItem/ExecutorItem';

interface IProps {
    executors: IExecutorShort[];
}

export const ExecutorsList: FC<IProps> = ({executors}) => {
    const {executors: favouriteExecutors} = useTypedSelector(
        (state) => state.favourites
    );
    return (
        <Stack gap={'10px'}>
            {executors.map((executor) => {
                const isFavourite = favouriteExecutors.some(
                    (favourite_executor) =>
                        favourite_executor.id === executor.id
                );
                return (
                    <ExecutorItem
                        executor={executor}
                        key={executor.title + executor.id}
                        isFavourite={isFavourite}
                    />
                );
            })}
        </Stack>
    );
};
