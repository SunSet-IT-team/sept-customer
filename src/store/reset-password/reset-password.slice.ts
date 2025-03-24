import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IInitialStateResetPassword} from './state.interface';

const initialState: IInitialStateResetPassword = {
    data: {
        email: '',
        new_password: '',
        userId: null,
    },
};

export const resetPasswordSlice = createSlice({
    name: 'reset password',
    initialState,
    reducers: {
        setResetPasswordData(
            state,
            action: PayloadAction<IInitialStateResetPassword['data']>
        ) {
            state.data = action.payload;
        },
    },
});
