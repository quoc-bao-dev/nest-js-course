import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product' }) // Tóm tắt chức năng
  @ApiResponse({
    status: 201,
    description: 'The product has been successfully created.',
    type: CreateProductDto,
  })
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({
    status: 200,
    description: 'The list of products',
    type: [CreateProductDto],
  })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật sản phẩm' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Cập nhật thành công' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xoá sản phẩm' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Xoá thành công' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
