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
 * Получить избранное пользователя
 */
export const getFavoriteIds = (state: TypeRootState) =>
    state.user.user.profile.favoriteIds;

/**
 * Получить чат с поддержкой
 */
export const getSupportChat = (state: TypeRootState) => state.user.chat;

/**
 * Получить дату для сброса пароля
 */
export const getUserResetData = (state: TypeRootState) => state.user.resetData;
