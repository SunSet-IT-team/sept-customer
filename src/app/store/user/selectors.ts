import {TypeRootState} from '../store';

/**
 * Получить пользователя
 */
export const getCurrentUser = (state: TypeRootState) => state.user.user;

/**
 * Получить инициализацию
 */
export const getIsinited = (state: TypeRootState) => state.user.isInited;

/**
 * Загружается ли ещё пользователь
 */
export const getIsUserLoading = (state: TypeRootState) => state.user.isLoading;

/**
 * Получить чат с поддержкой
 */
export const getSupportChat = (state: TypeRootState) => state.user.chat;
