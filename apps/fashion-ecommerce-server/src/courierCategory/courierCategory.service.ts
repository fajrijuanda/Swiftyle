import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CourierCategoryServiceBase } from "./base/courierCategory.service.base";

@Injectable()
export class CourierCategoryService extends CourierCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
