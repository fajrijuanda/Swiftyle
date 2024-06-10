import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RefundRequestServiceBase } from "./base/refundRequest.service.base";

@Injectable()
export class RefundRequestService extends RefundRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
