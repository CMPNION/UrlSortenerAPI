import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export async function connectToDatabase(dbname: string, collectionName: string): Promise<{shortener: mongoDB.Collection}> {

    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    await client.connect();

    const db: mongoDB.Db = client.db(dbname);
    const shortenerCollection: mongoDB.Collection = db.collection(collectionName);

    const collections = {
    shortener: shortenerCollection,
    };

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${shortenerCollection.collectionName}`);

    return collections;
}