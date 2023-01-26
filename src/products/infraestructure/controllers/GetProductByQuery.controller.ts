import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  Controller,
  Post,
  HttpStatus,
  Inject,
  Query,
  Res,
} from '@nestjs/common';

import { PaginateProductMapper } from '../../application/usecases/PaginateProductMapper.service';

import { StatusResponse } from '../../../shared/StatusResponse.interface';
import { PaginatedDTO } from '../dtos/Paginated.dto';
import { PaginatedResponseDTO } from '../dtos/PaginatedResponse.dto';

@Controller('products')
export class GetProductByQuery {
  constructor(
    @Inject(PaginateProductMapper)
    private paginatedProductMapper: PaginateProductMapper,
  ) {}

  @Post()
  @ApiOperation({ summary: 'find product by query' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: PaginatedResponseDTO,
  })
  execute(
    @Query() { page, size, query, currency }: PaginatedDTO,
    @Res() res: StatusResponse<PaginatedResponseDTO>,
  ): StatusResponse<PaginatedResponseDTO> {
    const records: PaginatedResponseDTO = this.paginatedProductMapper.execute({
      page: Number(page),
      size: Number(size),
      query,
      currency,
    });

    if (records.metadata.totalRecords === 0) {
      return res.status(HttpStatus.NOT_FOUND).json(records);
    }

    return res.status(HttpStatus.OK).json(records);
  }
}
