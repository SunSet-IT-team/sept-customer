import {Box, Stack} from '@mui/material';
import {FC, RefCallback} from 'react';
import {IExecutor} from '../../types/executor';
import {ExecutorItem} from './ExecutorItem/ExecutorItem';
import {ExecutorItemFavourite} from './ExecutorItem/ExecutorItemFavorite';

/**
 * Тип используемых видов карточек исполнителей в списке
 */
export enum ExecutorItemType {
    /**
     * Обычная карточка исполнителя.
     * Экран - Выбор исполнителя.
     */
    DEFAULT,

    /**
     * Кароточка с избранным исполнителем.
     * Экран - Личный профиль - Избранное
     */
    FAVORITE,
}

interface IProps {
    itemType?: ExecutorItemType;
    executors: IExecutor[];
    observedRef: RefCallback<HTMLDivElement>;
}

/**
 * Лист исполнителей
 */
export const ExecutorsList: FC<IProps> = ({
    itemType = ExecutorItemType.DEFAULT,
    executors,
    observedRef,
}) => {
    return (
        <Stack gap="40px" sx={{height: '100%'}}>
            {executors.map((executor) => {
                return (
                    <Box key={executor.title + executor.id}>
                        {itemType === ExecutorItemType.DEFAULT ? (
                            <ExecutorItem executor={executor} />
                        ) : (
                            <ExecutorItemFavourite executor={executor} />
                        )}
                    </Box>
                );
            })}
            <Box ref={observedRef}></Box>
        </Stack>
    );
};
