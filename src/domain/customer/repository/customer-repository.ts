import Customer from "../entity/customer";

export default interface CustomerRepository {
  create(entity: Customer): Promise<void>;
  update(entity: Customer): Promise<void>;
  find(id: string): Promise<Customer>;
  findAll(): Promise<Customer[]>;
}
