import { IMailer } from "../interfaces/IMailer";
import { IMessageBroker } from "../interfaces/IMessageBroker";
import { IProductInteractor } from "../interfaces/IProductIntetactor";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductInteractor implements IProductInteractor {
  private repository: IProductRepository;
  // private mailer: IMailer;
  // private brocker: IMessageBroker;
  constructor(
    repository: IProductRepository
    // mailer: IMailer,
    // brocker: IMessageBroker
  ) {
    // this.mailer = mailer;
    // this.brocker = brocker;
    this.repository = repository;
  }
  createProduct(input: any) {
    return this.repository.create(input);
  }
  updateStock(id: number, stock: number) {
    return this.repository.update(id, stock);
  }
  getProducts(limit: number, offset: number) {
    return this.repository.find(limit, offset);
  }
}
