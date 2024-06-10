import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderHistoryServiceBase } from "./base/orderHistory.service.base";

@Injectable()
export class OrderHistoryService extends OrderHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
