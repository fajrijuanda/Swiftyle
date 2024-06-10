import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentsServiceBase } from "./base/payments.service.base";

@Injectable()
export class PaymentsService extends PaymentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
