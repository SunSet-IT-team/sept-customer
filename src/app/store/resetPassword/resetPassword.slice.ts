import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IInitialStateResetPassword} from './state.interface';

const initialState: IInitialStateResetPassword = {
    email: '',
    new_password: '',
    userId: null,
};

export const resetPasswordSlice = createSlice({
    name: 'reset password',
    initialState,
    reducers: {
        /**
         * Полностью обновляет данные в слайсе по забытому паролю.
         */
        setResetPasswordData(
            state,
            action: PayloadAction<IInitialStateResetPassword>
        ) {
            return {...state, ...action.payload};
        },
    },
});
