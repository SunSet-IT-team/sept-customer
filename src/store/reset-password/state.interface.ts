export interface IInitialStateResetPassword {
    data: {
        email: string;
        new_password: string;
        userId: number | null;
    };
}
