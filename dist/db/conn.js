"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = connectToDatabase;
const mongoDB = require("mongodb");
const dotenv = require("dotenv");
async function connectToDatabase(dbname, collectionName) {
    dotenv.config();
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    await client.connect();
    const db = client.db(dbname);
    const shortenerCollection = db.collection(collectionName);
    const collections = {
        shortener: shortenerCollection,
    };
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${shortenerCollection.collectionName}`);
    return collections;
}
//# sourceMappingURL=conn.js.map