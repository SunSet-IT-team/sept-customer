import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {INewOrderForm} from '../../components/OrderForm/schema';
import {IExecutorShort} from '../../types/executor';
import {IInitialStateNewOrder} from './state.interface';
const initialState: IInitialStateNewOrder = {
    formData: null,
    executor: null,
};
export const newOrderSlice = createSlice({
    name: 'new order',
    initialState,
    reducers: {
        setFormData(
            state,
            action: PayloadAction<Omit<INewOrderForm, 'executor'> | null>
        ) {
            state.formData = action.payload;
        },
        setExecutor(state, action: PayloadAction<IExecutorShort | null>) {
            state.executor = action.payload;
        },
    },
});

const persistConfig = {
    key: 'newOrder',
    storage,
};

export const newOrderReducer = persistReducer(
    persistConfig,
    newOrderSlice.reducer
);
