import {Theme} from '@emotion/react';
import {SxProps} from '@mui/material';

/**
 * Id
 */
export type WithId = {
    id: number;
};

/**
 * Приоритет
 */
export type WithPriority = {
    priority: number;
};

/**
 * Email
 */
export type WithEmail = {
    email: string;
};

/**
 * Телефон
 */
export type WithPhone = {
    phone: string;
};

/**
 * Название
 */
export type WithName = {
    name: string;
};

/**
 * Пагинация
 */
export type Pagination = {
    isLoading: boolean;
    total: number;
    currentPage: number;
    perPage: number;
};

/**
 * Сортировка
 */
export type Sort = {
    field: string;
    sort: 'asc' | 'desc';
};

/**
 * Стили
 */
export type StylesDictionary = Record<string, SxProps<Theme>>;

/**
 * Фильтр
 */
export type Filter = {
    name: string;
    value: string | number;
};

/**
 * Ответ сервера
 */
export type ServerAns<T> = T & {
    success: boolean;
    error?: string;
};
