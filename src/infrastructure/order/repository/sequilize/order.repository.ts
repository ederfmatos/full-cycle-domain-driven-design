import Order from "../../../../domain/checkout/entity/order";
import OrderRepository from "../../../../domain/checkout/repository/order-repository";
import OrderItemModel from "./order-item.model";
import OrderModel from "./order.model";

export default class DefaultOrderRepository implements OrderRepository {
  async update(entity: Order): Promise<void> {
    await OrderModel.sequelize.transaction(async (transaction) => {
      await OrderItemModel.destroy({
        where: { order_id: entity.id },
        transaction: transaction,
      });
      const items = entity.items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        product_id: item.productId,
        quantity: item.quantity,
        order_id: entity.id,
      }));
      await OrderItemModel.bulkCreate(items, { transaction: transaction });
      await OrderModel.update(
        { total: entity.total() },
        { where: { id: entity.id }, transaction: transaction }
      );
    });
  }

  async find(id: string): Promise<Order> {
    const orderModel = await OrderModel.findOne({ where: { id }, include: OrderItemModel });
    return orderModel.toOrder();
  }

  async findAll(): Promise<Order[]> {
    const orders = await OrderModel.findAll({ include: OrderItemModel });
    return orders.map((orderModel) => orderModel.toOrder());
  }

  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }
}
