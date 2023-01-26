import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Res,
} from '@nestjs/common';

import { ProductFinder } from './../../application/usecases/ProductFinder.service';
import { ProductByIdDTO } from '../dtos/ProductById.dto';
import { ProductDTO } from '../dtos/Product.dto';

import { ProductNotFoundException } from '../../domain/exceptions/ProductNotFoundException';
import { StatusResponse } from '../../../shared/StatusResponse.interface';

@Controller('products')
export class GetProductById {
  constructor(@Inject(ProductFinder) private productFinder: ProductFinder) {}

  @Get(':id')
  @ApiOperation({ summary: 'find product by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: ProductDTO,
  })
  execute(
    @Param() { id }: ProductByIdDTO,
    @Res() res: StatusResponse<ProductDTO>,
  ): StatusResponse<ProductDTO> {
    const product: ProductDTO | ProductNotFoundException =
      this.productFinder.getProductById({ id: Number(id) });

    if (product instanceof ProductNotFoundException) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: product.getErrorMessage() });
    }

    return res.status(HttpStatus.OK).json(product);
  }
}
