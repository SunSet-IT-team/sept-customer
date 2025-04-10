import {Executor} from './executor';
import {Customer} from './user';

/**
 * Все типы нужные для работы чата
 */

/**
 * Чат
 */
export type Chat = {
    id: number;
    messages: Message[];
    interlocutor: Executor | Customer;
    additionalInfo?: string;
};

/**
 * Сообщение
 */
export type Message = {
    id: number | string;
    chatId: number;
    content?: string;
    fileUrl?: string;
    senderId: number;
    readed: boolean;
    createdAt: string;
    isLoading?: boolean;
};
