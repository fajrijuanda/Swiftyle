import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StyleServiceBase } from "./base/style.service.base";

@Injectable()
export class StyleService extends StyleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
