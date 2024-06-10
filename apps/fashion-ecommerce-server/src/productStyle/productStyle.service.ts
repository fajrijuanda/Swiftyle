import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductStyleServiceBase } from "./base/productStyle.service.base";

@Injectable()
export class ProductStyleService extends ProductStyleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
