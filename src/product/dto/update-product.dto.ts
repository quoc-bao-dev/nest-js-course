import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional({
    example: 'iPhone 15 Updated',
    description: 'Tên sản phẩm',
  })
  name?: string;

  @ApiPropertyOptional({
    example: 'Sản phẩm cao cấp của Apple đã cập nhật',
    description: 'Mô tả sản phẩm (tuỳ chọn)',
  })
  description?: string;

  @ApiPropertyOptional({
    example: 1899.99,
    description: 'Giá sản phẩm',
  })
  price?: number;
}
