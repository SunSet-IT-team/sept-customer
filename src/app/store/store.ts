import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistStore} from 'redux-persist';
import {newOrderReducer} from './newOrder/newOrder.slice';
import {resetPasswordSlice} from './resetPassword/resetPassword.slice';
import {userReducer} from './user/slice';

const rootReducer = combineReducers({
    resetPassword: resetPasswordSlice.reducer,
    newOrderForm: newOrderReducer,
    user: userReducer,
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
