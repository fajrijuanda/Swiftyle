import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppCouponsServiceBase } from "./base/appCoupons.service.base";

@Injectable()
export class AppCouponsService extends AppCouponsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
