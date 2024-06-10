import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductGenreServiceBase } from "./base/productGenre.service.base";

@Injectable()
export class ProductGenreService extends ProductGenreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
