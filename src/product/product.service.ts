import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateProductDto) {
    const product = await this.findOne(id);
    if (!product) throw new NotFoundException('Product not found');
    return this.prisma.product.update({ where: { id }, data });
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    if (!product) throw new NotFoundException('Product not found');
    return this.prisma.product.delete({ where: { id } });
  }
}
