import dotenv from "dotenv";

dotenv.config();

import { MongoClient } from "mongodb";

let client: MongoClient;

export const mongoClient = (): MongoClient => {
  if (!client) {
    const uri = `${process.env.DB_URL}`;
    client = new MongoClient(uri);
  }
  return client;
};
