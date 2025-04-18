import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {logout} from './auth';
import storage from 'redux-persist/lib/storage';
import {fetchUserData, toggleFavorite} from './thunk';
import {persistReducer} from 'redux-persist';
import {Chat, Message} from '../../../types/chat';
import {Executor, ExecutorServiceType} from '../../../types/executor';
import {Customer, VerifyData} from '../../../types/user';
import {toggleArrayItem} from '../../../utils/share';

/**
 * Слайс для хранения данных текущего пользователя
 */

interface UserSlice {
    user: Customer | null;
    isInited: boolean;
    isLoading: boolean;
    chat: Chat | null;
    verigyData?: VerifyData;
}

const initialState: UserSlice = {
    user: null,
    isInited: false,

    isLoading: true,
    chat: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        /**
         * Установить текущего пользователя
         */
        setUser(state, action: PayloadAction<Customer | null>) {
            state.user = action.payload;
            // Сбрасываем данные для проверки
            state.verigyData = undefined;
        },

        clearUser(state) {
            state.user = null;
            logout();
        },

        /**
         * Сохраняем данные для проверки
         */
        setVerigyData(state, action: PayloadAction<VerifyData | undefined>) {
            state.verigyData = action.payload;
        },
    },
    extraReducers: (builder) => {
        /**
         * fetchUserData
         */
        builder.addCase(
            fetchUserData.fulfilled,
            (state, action: PayloadAction<Customer | null>) => {
                state.user = action.payload;
                state.isInited = true;
                state.isLoading = false;
            }
        );

        builder.addCase(fetchUserData.rejected, (state) => {
            state.user = null;
            state.isInited = true;
            state.isLoading = false;
        });

        /**
         * toggleFavorite
         */
        builder.addCase(
            toggleFavorite.fulfilled,
            (state, action: PayloadAction<number>) => {
                const favoriteIds = state.user.profile.favoriteIds;

                state.user.profile.favoriteIds = toggleArrayItem(
                    favoriteIds,
                    action.payload
                );
            }
        );
    },
});

export const {setUser, clearUser, setVerigyData} = userSlice.actions;

// Насколько я понял, то использование данного конфига, само по себе обеспечивает
// кэширование данных слайса в LocalStorage, поэтому cachedUser не нужен
const persistConfig = {
    key: 'user',
    storage,
};

export const userReducer = userSlice.reducer;
// export const userReducer = persistReducer(persistConfig, userSlice.reducer);
