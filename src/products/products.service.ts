import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(data) {
    return this.prisma.product.create({ data });
  }
  findAll() {
    return this.prisma.product.findMany({
      where: { deletedAt: null },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id, deletedAt: null },
    });
  }
  update(id: number, data) {
    return this.prisma.product.update({
      where: { id, deletedAt: null },
      data,
    });
  }
  remove(id: number) {
    return this.prisma.product.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
