import { IOrderShortInfo, OrderStatus } from "../../types/order";

export const order_data: IOrderShortInfo = {
    date: '23.05.2024',
    type: 'чистка септика',
    status: OrderStatus.COMPLETED,
    executor: 'ООО Септик',
};
