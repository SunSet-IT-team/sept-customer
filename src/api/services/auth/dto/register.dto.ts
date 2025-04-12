export interface IRegisterDTO {
    email: string;
    password: string;
    address: string;
}

export interface IRegisterResponse {
    token: string;
}