import {WithPriority, WithId, WithName, WithEmail, WithPhone} from './share';
import {Customer} from './user';

export interface IExecutor {
    id: number;
    title: string;
    reviewsCount: number;
    phone: string;
    averageRating: number;
    profileImg: string;
    licenseDoc: string;
    registrationDoc: string;
    description: string;
    callsCount: number;
    experience: number;
    reviews: IReview[];
}

export interface IReview {
    id: number | string;
    username: string;
    rating: number;
    text: string;
    author?: Customer;
    target?: IExecutor;
    data: string;
    order?: {
        id: number | string;
        title: string;
    };
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
    /**
     * Физ лицо
     */
    INDIVIDUAL = 'INDIVIDUAL',

    /**
     * ООО
     */
    LEGAL_ENTITY = 'LEGAL_ENTITY',

    /**
     * ИП
     */
    SOLE_PROPRIETOR = 'SOLE_PROPRIETOR',
}
