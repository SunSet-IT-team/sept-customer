export interface IOrder {
  id: string;
  date: string;
  orderName: string;
  status: 'В работе' | "Выполнен";
}