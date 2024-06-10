import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromotionsServiceBase } from "./base/promotions.service.base";

@Injectable()
export class PromotionsService extends PromotionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
