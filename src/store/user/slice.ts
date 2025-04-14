import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {logout} from './auth';
import storage from 'redux-persist/lib/storage';
import {fetchUserData} from './thunk';
import {persistReducer} from 'redux-persist';
import {Chat, Message} from '../../types/chat';
import {Executor, ExecutorServiceType} from '../../types/executor';
import {Customer, VerifyData} from '../../types/user';

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
         * Подтверждение отправки сообщения
         */
        sendedMessage(
            state,
            action: PayloadAction<{timeId: String; message: Message}>
        ) {
            const message = action.payload.message;
            const timeId = action.payload.timeId;
            const chat = state.chat;
            if (chat) {
                chat.messages = chat.messages.filter((m) => m.id != timeId);
                chat.messages.push(message);
            }
        },

        /**
         * Пришло сообщение
         */
        receivedMessage(state, action: PayloadAction<Message>) {
            const message = action.payload;
            const chat = state.chat;

            if (chat) chat.messages.push(message);
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
    },
});

export const {setUser, clearUser, receivedMessage, setVerigyData} =
    userSlice.actions;

// Насколько я понял, то использование данного конфига, само по себе обеспечивает
// кэширование данных слайса в LocalStorage, поэтому cachedUser не нужен
const persistConfig = {
    key: 'user',
    storage,
};

export const userReducer = userSlice.reducer;
// export const userReducer = persistReducer(persistConfig, userSlice.reducer);
