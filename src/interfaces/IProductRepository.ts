import { Product } from "../entities/products";

export interface IProductRepository {
  create(data: Product): Promise<Product>;
  update(id: number, stock: number): Promise<Product>;
  find(limit: number, offset: number): Promise<Product[]>;
}
