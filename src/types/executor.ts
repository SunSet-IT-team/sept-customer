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
