import { Body, Injectable } from '@nestjs/common';
import { connectToDatabase } from 'src/db/conn';
import { ShortenerDto } from 'src/dto/shortener.dto';
import { TokenBase, TokenGenerator } from 'ts-token-generator';
import { url } from 'inspector';
import * as dotenv from 'dotenv';

@Injectable()
export class ShortenerService {

    async createShortUrl(@Body() body: ShortenerDto ) {
        const url = body.url;
        const gen = new TokenGenerator({ bitSize: 128, baseEncoding: TokenBase.BASE62 });
        const token = gen.generate();
        const dbconn = await connectToDatabase(process.env.DB_NAME, process.env.DB_COLLECTION);
        dbconn.shortener.insertOne({url: url, token: token });
        var shortUrl =  "localhost:8080/api/v1/"+ token;

        return shortUrl;
    }

    async toOriginalUrl(token) {
        const dbconn = await connectToDatabase(process.env.DB_NAME, process.env.DB_COLLECTION);
        const res = await dbconn.shortener.findOne({token: token}, {projection: {_id: 0, url: 1, token: 1}});
        return res.url;
    }
}
