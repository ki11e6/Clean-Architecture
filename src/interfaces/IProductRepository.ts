import { Product } from "../entities/products";

export interface IProductRepository {
  create(data: Product): Promise<unknown>;
  update(id: number, stock: number): Promise<unknown>;
  find(limit: number, offset: number): Promise<unknown>;
}
