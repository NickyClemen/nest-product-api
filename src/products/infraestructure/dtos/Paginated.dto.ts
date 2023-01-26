import { ApiProperty } from '@nestjs/swagger';

import { IsNumber, IsString } from 'class-validator';

export class PaginatedDTO {
  @ApiProperty({ example: '1', description: 'page' })
  @IsString()
  page: number;

  @ApiProperty({ example: 1, description: 'size' })
  @IsString()
  size: string;

  @ApiProperty({ example: 1, description: 'query' })
  @IsNumber()
  query: unknown;

  @ApiProperty({ example: 'ARS', description: 'product currency' })
  @IsString()
  currency: string;
}
