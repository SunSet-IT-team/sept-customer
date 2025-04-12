import { ordersData } from '../../../pages/MyOrders/data';
import { ordersWithReviewData } from '../../../pages/MyReviews/data';

export const OrderService = {
    async getUserOrdersWithReview() {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        return ordersWithReviewData;
    },

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
