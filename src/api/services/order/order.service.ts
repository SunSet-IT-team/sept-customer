import {ordersData} from '../../../pages/MyOrders/data';

export const OrderService = {
    async getUserOrders() {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        return ordersData;
    },

    async getOrderById(id: any) {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        return ordersData.find((order) => order.id === id);
    },
};
