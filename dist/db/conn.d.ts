import * as mongoDB from "mongodb";
export declare function connectToDatabase(dbname: string, collectionName: string): Promise<{
    shortener: mongoDB.Collection;
}>;
