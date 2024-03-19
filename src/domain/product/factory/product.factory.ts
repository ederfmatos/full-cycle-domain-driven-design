import ProductA from "../entity/product-a";
import { Product } from "../entity/product";
import { randomUUID as uuid } from 'crypto'
import ProductB from "../entity/product-b";

export default class ProductFactory {
  public static create(
    type: string,
    name: string,
    price: number
  ): Product {
    switch (type) {
      case "a":
        return new ProductA(uuid(), name, price);
      case "b":
        return new ProductB(uuid(), name, price);
      default:
        throw new Error("Product type not supported");
    }
  }
}
