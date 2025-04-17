import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {INewOrderForm} from '../../../components/OrderForm/schema';
import {IExecutor} from '../../../types/executor';
import {IService} from '../../../types/service';
import {IInitialStateNewOrder} from './state.interface';

const initialState: IInitialStateNewOrder = {
    formData: null,
    executor: null,
    service: null,
};

export const newOrderSlice = createSlice({
    name: 'new order',
    initialState,
    reducers: {
        setService(state, action: PayloadAction<IService | null>) {
            state.service = action.payload;
        },
        setFormData(
            state,
            action: PayloadAction<Omit<INewOrderForm, 'executor'> | null>
        ) {
            state.formData = action.payload;
        },
        setExecutor(state, action: PayloadAction<IExecutor | null>) {
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
