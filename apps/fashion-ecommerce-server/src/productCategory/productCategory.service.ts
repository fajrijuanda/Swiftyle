import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductCategoryServiceBase } from "./base/productCategory.service.base";

@Injectable()
export class ProductCategoryService extends ProductCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
