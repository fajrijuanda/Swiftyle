import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WishlistItemServiceBase } from "./base/wishlistItem.service.base";

@Injectable()
export class WishlistItemService extends WishlistItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
