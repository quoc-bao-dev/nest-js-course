import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'iPhone 15', description: 'Tên sản phẩm' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: 'Sản phẩm cao cấp của Apple',
    description: 'Mô tả sản phẩm (tuỳ chọn)',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 1999.99, description: 'Giá sản phẩm' })
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
