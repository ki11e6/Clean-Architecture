import { Product } from "../entities/products";

export interface IProductInteractor {
  createProduct(input: any): Promise<unknown>;
  updateStock(id: number, stock: number): Promise<unknown>;
  getProducts(limit: number, offset: number): Promise<unknown>;
}
