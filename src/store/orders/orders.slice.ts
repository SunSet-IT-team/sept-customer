import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {IInitialStateOrders} from './state.interface';
import {IOrder} from '../../types/order';

const initialState: IInitialStateOrders = {
    orders: [],
};

export const OrdersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setOrders(state, action: PayloadAction<IOrder[]>) {
            state.orders = action.payload;
        },
    },
});

const persistConfig = {
    key: 'orders',
    storage,
};

export const OrdersReducer = persistReducer(persistConfig, OrdersSlice.reducer);
