import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShopCouponsServiceBase } from "./base/shopCoupons.service.base";

@Injectable()
export class ShopCouponsService extends ShopCouponsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
