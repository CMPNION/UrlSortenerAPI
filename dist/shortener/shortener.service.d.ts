import { ShortenerDto } from 'src/dto/shortener.dto';
export declare class ShortenerService {
    createShortUrl(body: ShortenerDto): Promise<string>;
    toOriginalUrl(token: any): Promise<any>;
}
