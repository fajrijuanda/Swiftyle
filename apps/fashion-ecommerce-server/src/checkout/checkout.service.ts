import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CheckoutServiceBase } from "./base/checkout.service.base";

@Injectable()
export class CheckoutService extends CheckoutServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
