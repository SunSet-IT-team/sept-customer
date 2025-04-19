import {IServerAns} from '../../../../types/share';
import {FileResponse} from '../../share/types';

export interface IGetOrderChat extends IServerAns {
    data: {
        theme: string;
        orderId: string;
        id: number;
        participants: {
            chatId: number;
            id: number;
            userId: number;
            user: {
                profile: {
                    companyName: string;
                    profilePhoto: FileResponse;
                };
            };
        }[];
    };
}

export interface IGetAdminChat extends IServerAns {
    data: {
        theme: string;
        orderId: string;
        id: number;
        participants: {
            chatId: number;
            id: number;
            userId: number;
            user: {
                profile: {
                    companyName: string;
                    profilePhoto: FileResponse;
                };
            };
        }[];
    };
}
