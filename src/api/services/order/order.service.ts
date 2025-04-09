import { ordersData } from "../../../pages/MyOrders/data";

export const OrderService = {
    async getUserOrders () {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000);
      })
      return ordersData
    }
};
