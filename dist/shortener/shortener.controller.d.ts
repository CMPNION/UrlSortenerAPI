import { ShortenerService } from './shortener.service';
import { Response } from 'express';
import { ShortenerDto } from '../dto/shortener.dto';
export declare class ShortenerController {
    private readonly shortenerService;
    constructor(shortenerService: ShortenerService);
    createShortUrl(body: ShortenerDto, resp: Response): Promise<Response<any, Record<string, any>>>;
    toOriginalUrl(token: string): Promise<{
        url: any;
    }>;
}
