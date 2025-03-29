import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistStore} from 'redux-persist';
import {favouritesReducer} from './favourites/favourites.slice';
import {newOrderReducer} from './new_order/new_order.slice';
import {resetPasswordSlice} from './reset-password/reset-password.slice';

const rootReducer = combineReducers({
    resetPassword: resetPasswordSlice.reducer,
    newOrderForm: newOrderReducer,
    favourites: favouritesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
