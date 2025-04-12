import { IOrderWithReviewData } from "../../types/order";

export const ordersWithReviewData: IOrderWithReviewData[] = [
    {
        orderWithReview: {
            id: '39-19',
            name: 'ООО Септики',
            date: '16 июля, 16:00',
            address: 'Садовая, 15',
            review: {
                rating: 4,
                text: 'Работой компании остался очень доволен. Приятное общение, пунктуально. К работе меня не привлекали. Предоставили шланги, через 1,5 часа все было закончено.',
            },
        },
        executor: {
            id: 1,
            title: 'ООО Септики',
            reviewsCount: 85,
            averageRating: 4.9,
            imgUrl: 'https://placehold.co/90x90',
        },
        isFavourite: false,
    },
    {
        orderWithReview: {
            id: '39-20',
            name: 'ООО Септики',
            date: '16 июля, 16:00',
            address: 'Садовая, 15',
            review: {
                rating: 4,
                text: 'Ежегодно обращаюсь в одну и ту же компанию, всегда знаю, что приедут в удобный для меня день и мне не придется искать ассенизатор. Работают тщательно, кропотливо.',
            },
        },
        executor: {
            id: 1,
            title: 'ООО Септики',
            reviewsCount: 85,
            averageRating: 4.9,
            imgUrl: 'https://placehold.co/90x90',
        },
        isFavourite: true,
    },
];
