import express from "express";
import { ProductController } from "../controllers/ProductContoller";
import { ProductRepository } from "../repositories/productRespository";
import { ProductInteractor } from "../interactors/productInteractor";

const repository = new ProductRepository();

const interactor = new ProductInteractor(repository);

const controller = new ProductController(interactor);

const router = express.Router();
router.post("/products", controller.onCreateProduct.bind(controller));

router.get("/products", controller.onGetProducts.bind(controller));

router.patch("/products/:id", controller.onUpdateStock.bind(controller));

export default router;
