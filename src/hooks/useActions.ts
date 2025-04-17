import {Action, bindActionCreators} from '@reduxjs/toolkit';
import {useMemo} from 'react';
import {useAppDispatch} from '../app/store/store';

type ActionCreatorsMapObject<T extends Action = Action> = {
    [key: string]: (...args: any[]) => T;
};

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
    const dispatch = useAppDispatch();
    return useMemo(
        () => bindActionCreators(actions, dispatch),
        [dispatch, actions]
    );
};
