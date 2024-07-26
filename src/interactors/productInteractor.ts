import { inject, injectable } from "inversify";
import { IMailer } from "../interfaces/IMailer";
import { IMessageBroker } from "../interfaces/IMessageBroker";
import { IProductInteractor } from "../interfaces/IProductIntetactor";
import { IProductRepository } from "../interfaces/IProductRepository";
import { INTERFACE_TYPE } from "../utils";

@injectable()
export class ProductInteractor implements IProductInteractor {
  private repository: IProductRepository;
  private mailer: IMailer;
  private brocker: IMessageBroker;
  constructor(
    @inject(INTERFACE_TYPE.ProductRepository) repository: IProductRepository,
    @inject(INTERFACE_TYPE.Mailer) mailer: IMailer,
    @inject(INTERFACE_TYPE.MessageBroker) brocker: IMessageBroker
  ) {
    this.mailer = mailer;
    this.brocker = brocker;
    this.repository = repository;
  }
  async createProduct(input: any) {
    const data = this.repository.create(input);
    //do some checks
    await this.brocker.NotifyToPromotionService(data);
    return data;
  }
  async updateStock(id: number, stock: number) {
    const data = this.repository.update(id, stock);
    await this.mailer.SendEmail("someone@someone.come", data);
    return data;
  }
  async getProducts(limit: number, offset: number) {
    return this.repository.find(limit, offset);
  }
}
