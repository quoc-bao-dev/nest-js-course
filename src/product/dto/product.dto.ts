import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({ example: 1, description: 'ID của sản phẩm' })
  id: number;

  @ApiProperty({ example: 'iPhone 15', description: 'Tên sản phẩm' })
  name: string;

  @ApiProperty({
    example: 'Sản phẩm cao cấp của Apple',
    required: false,
    description: 'Mô tả sản phẩm (tùy chọn)',
  })
  description?: string;

  @ApiProperty({ example: 1999.99, description: 'Giá sản phẩm' })
  price: number;

  @ApiProperty({
    example: new Date().toISOString(),
    description: 'Thời điểm tạo',
  })
  createdAt: Date;

  @ApiProperty({
    example: new Date().toISOString(),
    description: 'Thời điểm cập nhật gần nhất',
  })
  updatedAt: Date;
}
