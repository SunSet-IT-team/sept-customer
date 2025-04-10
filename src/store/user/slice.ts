import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {logout} from './auth';
import storage from 'redux-persist/lib/storage';
import {fetchUserData} from './thunk';
import {persistReducer} from 'redux-persist';
import {Chat, Message} from '../../types/chat';
import {Executor, ExecutorServiceType} from '../../types/executor';
import {Customer} from '../../types/user';

/**
 * Слайс для хранения данных текущего пользователя
 */

interface UserSlice {
    user: Customer | null;
    isInited: boolean;
    isLoading: boolean;
    chat: Chat | null;
}

const cachedUser = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('cachedUser') ?? '""')
    : null;

export const placeholderExecutor: Executor = {
    id: 1,
    priority: 100,
    name: 'Техническая поддержка',
    email: 'test@mail.ru',
    phone: '89009009999',
    profileImage: '',
    about: 'Самая лучшая компания',
    experience: '20 лет',
    typeService: ExecutorServiceType.LEGAL_ENTITY,
    city: 'Воронеж',
    orderQty: 20,
    docs: {
        register: '',
        approve: '',
    },
    rating: {
        value: 4.8,
        count: 100,
    },
};
const initialState: UserSlice = {
    user: null,
    isInited: false,

    isLoading: true,
    chat: {
        id: 1,
        interlocutor: placeholderExecutor,
        messages: [
            {
                id: 1,
                chatId: 1,
                content: 'Привет мир',
                senderId: 1,
                createdAt: '10:10',
                readed: true,
            },
            {
                id: 2,
                chatId: 1,
                content:
                    'Добрый день, хочу уточнить детали: как будет проводиться сборка',
                senderId: 1,
                createdAt: '10:10',
                readed: true,
            },
            {
                id: 3,
                chatId: 1,
                content: 'Добрый, да, конечно, сейчас расскажем',
                senderId: 2,
                createdAt: '10:10',
                readed: true,
            },
            {
                id: 4,
                chatId: 1,
                content: 'Спасибо!',
                senderId: 1,
                createdAt: '10:10',
                readed: false,
            },
        ],
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<Customer | null>) {
            state.user = action.payload;
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

                // Кеширование
                localStorage.setItem(
                    'cachedUser',
                    JSON.stringify(action.payload)
                );
            }
        );

        builder.addCase(fetchUserData.rejected, (state) => {
            state.user = null;
            state.isInited = true;
            state.isLoading = false;
        });
    },
});

export const {setUser, clearUser, receivedMessage} = userSlice.actions;

const persistConfig = {
    key: 'user',
    storage,
};

export const userReducer = persistReducer(persistConfig, userSlice.reducer);
