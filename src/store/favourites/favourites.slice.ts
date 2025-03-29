import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {IExecutorShort} from '../../types/executor';
import {IInitialStateFavourites} from './state.interface';
const initialState: IInitialStateFavourites = {
    executors: [],
};
export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addExecutor(state, action: PayloadAction<IExecutorShort>) {
            state.executors = [...state.executors, action.payload];
        },
        removeExecutor(state, action: PayloadAction<IExecutorShort>) {
            const newExecutors = state.executors.filter(
                (executor) => executor.id !== action.payload.id
            );
            state.executors = newExecutors;
        },
    },
});

const persistConfig = {
    key: 'favourites',
    storage,
};

export const favouritesReducer = persistReducer(
    persistConfig,
    favouritesSlice.reducer
);
