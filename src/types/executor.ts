import {WithPriority, WithId, WithName, WithEmail, WithPhone} from './share';

export interface IExecutorShort {
    id: number;
    title: string;
    reviewsCount: number;
    averageRating: number;
    imgUrl: string;
}

export interface IReview {
    id: number;
    username: string;
    rating: number;
    text: string;
}

export interface IExecutorFull extends IExecutorShort {
    description: string;
    callsCount: number;
    experience: number;
    reviews: IReview[];
    ratingsCount: number;
}

/**
 * Исполнитель
 */
export type Executor = WithPriority &
    WithId &
    WithName &
    WithEmail &
    WithPhone & {
        profileImage: string;
        about: string;
        experience: string;
        typeService: ExecutorServiceType;
        city: string;
        orderQty: number;
        docs: {
            register: string;
            approve: string;
        };
        rating: {
            value: number;
            count: number;
        };
    };

/**
 * Формы оказания услуг
 */
export enum ExecutorServiceType {
    // ИП
    SOLE = 'SOLE',

    // Юридическое лицо
    LEGAL_ENTITY = 'LEGAL_ENTITY',

    // Частник
    PRIVATE_PERSON = 'PRIVATE_PERSON',
}
