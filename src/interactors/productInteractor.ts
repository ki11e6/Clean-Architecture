import { IMailer } from "../interfaces/IMailer";
import { IMessageBroker } from "../interfaces/IMessageBroker";
import { IProductInteractor } from "../interfaces/IProductIntetactor";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductInteractor implements IProductInteractor {
  private repository: IProductRepository;
  private mailer: IMailer;
  private broker: IMessageBroker;
  constructor(
    repository: IProductRepository
    mailer: IMailer,
    broker: IMessageBroker
  ) {
     this.mailer = mailer;
     this.brocker = brocker;
     this.repository = repository;
  }
  async createProduct(input: any) {
    const data= this.repository.create(input);
	//valdation
	await this.broker.NotifyToPromotionService(data)
  }
  async updateStock(id: number, stock: number) {
    const data= this.repository.update(id, stock);
	await this.mailer.SendEmail('someone@someone.com', data)
  }
  getProducts(limit: number, offset: number) {
    return this.repository.find(limit, offset);
  }
}
