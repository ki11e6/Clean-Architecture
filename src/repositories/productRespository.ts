//this will connect with database logics

import { mongoClient } from "./../dbConnection";
import { Db, MongoClient } from "mongodb";
import { Product } from "../entities/products";
import { IProductRepository } from "../interfaces/IProductRepository";
import { ObjectId } from "bson";

export class ProductRepository implements IProductRepository {
  private client: MongoClient;
  constructor() {
    this.client = mongoClient();
  }
  async create({ name, description, price, stock }: Product): Promise<unknown> {
    const db: Db = this.client.db();
    const product = await db
      .collection("products")
      .insertOne({ name, description, price, stock });
    return product.acknowledged;
  }

  async update(id: number, stock: number): Promise<unknown> {
    const db: Db = this.client.db();
    const product = await db
      .collection("products")
      .updateOne({ _id: new ObjectId(id) }, { $set: { stock } });
    return product.acknowledged;
  }

  async find(limit: number, offset: number): Promise<unknown> {
    const skip = offset;
    console.log(skip, limit);
    const db: Db = this.client.db();
    const product = await db
      .collection("products")
      .find({})
      .skip(skip)
      .limit(limit)
      .toArray();
    return product;
  }
}
