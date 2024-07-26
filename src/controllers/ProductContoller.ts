//this will be controller that will connect with routes

import { Request, Response, NextFunction } from "express";
import { IProductInteractor } from "../interfaces/IProductIntetactor";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";

@injectable()
export class ProductController {
  private interactor: IProductInteractor;
  constructor(
    @inject(INTERFACE_TYPE.ProductInteractor) interactor: IProductInteractor
  ) {
    this.interactor = interactor;
  }

  async onCreateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const data = await this.interactor.createProduct(body);
      // await NotifyToPromotionService(product.rows[0]);
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async onGetProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const offset = parseInt(`${req.query.offset}`) || 0;
      const limit = parseInt(`${req.query.limit}`) || 10;
      const data = await this.interactor.getProducts(limit, offset);
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  async onUpdateStock(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(`${req.params.id}`);
      const stock = parseInt(`${req.body.stock}`);

      const product = await this.interactor.updateStock(id, stock);

      // await SendSendGridEmail(product.rows[0]);

      return res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }
}
