import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {IInitialStateOrders} from './state.interface';
import {IOrder} from '../../types/order';
import {INewReveiwForm} from '../../components/OrderReview/Form/shema';

const initialState: IInitialStateOrders = {
    orders: [],
};

export const OrdersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addReview(
            state,
            action: PayloadAction<{
                order_id: IOrder['id'];
                formData: INewReveiwForm;
            }>
        ) {
            const {order_id, formData} = action.payload;
            const order = state.orders.find((order) => order.id === order_id);
            if (order) {
                order.review = {
                    rating: formData.rating || 0, // Provide a default value if rating is undefined
                    text: formData.text || '', // Provide a default value if text is undefined
                };
            }
        },
        deleteReview(state, action: PayloadAction<{order_id: IOrder['id']}>) {
            const {order_id} = action.payload;
            const order = state.orders.find((order) => order.id === order_id);
            if (order) order.review = undefined;
        },
    },
});

const persistConfig = {
    key: 'orders',
    storage,
};

export const ordersReducer = persistReducer(persistConfig, OrdersSlice.reducer);
