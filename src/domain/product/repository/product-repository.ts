import { Product } from "../entity/product";

export default interface ProductRepository {
  create(entity: Product): Promise<void>;
  update(entity: Product): Promise<void>;
  find(id: string): Promise<Product>;
  findAll(): Promise<Product[]>;
}