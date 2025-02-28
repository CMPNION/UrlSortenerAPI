import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ShortenerDto {
  @IsUrl()
  @IsString()
  @IsNotEmpty()
  url: string;
}