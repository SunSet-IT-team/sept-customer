import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {IInitialStateNewReview} from './state.interface';
import {INewReveiwForm} from '../../components/OrderReview/Form/shema';

const initialState: IInitialStateNewReview = {
    formData: null,
};

export const newReviewSlice = createSlice({
    name: 'new review',
    initialState,
    reducers: {
        setFormData(state, action: PayloadAction<INewReveiwForm>) {
            state.formData = action.payload;
        },
        deleteReview(state) {
            state.formData = null
        }
    },
});

const persistConfig = {
    key: 'new review',
    storage,
};

export const newReviewReducer = persistReducer(
    persistConfig,
    newReviewSlice.reducer
);
