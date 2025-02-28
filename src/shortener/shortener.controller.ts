import { Send } from './../../node_modules/@types/express-serve-static-core/index.d';
import { white } from './../../node_modules/@colors/colors/index.d';
import { Controller, Get, Post, Body, Param, Redirect, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { ShortenerDto } from '../dto/shortener.dto';
import { TokenGenerator, TokenBase } from 'ts-token-generator';

@Controller('shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post("/toshort")
  @UsePipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true}))
  async createShortUrl(@Body() body: ShortenerDto ) {
    const res = await this.shortenerService.createShortUrl(body);
    return res;
  }

  @Get(":token")
  @Redirect()
  async toOriginalUrl(@Param('token') token: string) {
    const url = await this.shortenerService.toOriginalUrl(token);
    if (url) {
      return { url };
    } else {
      return { url: 'https://www.google.com' }; // Default redirect if URL not found
    }
  }


}
