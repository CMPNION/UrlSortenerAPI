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

  @Get("/{token}")
  async toOriginalUrl(@Param('token') token) {
    
    const res = this.shortenerService.toOriginalUrl(token);
    
    Redirect("https://www.google.com", HttpStatus.OK);
  }


}
