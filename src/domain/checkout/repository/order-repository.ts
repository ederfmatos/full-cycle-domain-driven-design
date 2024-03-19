import Order from "../entity/order";

export default interface OrderRepository {
  create(entity: Order): Promise<void>;
  update(entity: Order): Promise<void>;
  find(id: string): Promise<Order>;
  findAll(): Promise<Order[]>;
}