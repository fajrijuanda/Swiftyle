import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductPromotionServiceBase } from "./base/productPromotion.service.base";

@Injectable()
export class ProductPromotionService extends ProductPromotionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
