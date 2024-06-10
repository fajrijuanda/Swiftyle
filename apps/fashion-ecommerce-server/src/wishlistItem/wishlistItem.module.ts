import { Module } from "@nestjs/common";
import { WishlistItemModuleBase } from "./base/wishlistItem.module.base";
import { WishlistItemService } from "./wishlistItem.service";
import { WishlistItemController } from "./wishlistItem.controller";
import { WishlistItemResolver } from "./wishlistItem.resolver";

@Module({
  imports: [WishlistItemModuleBase],
  controllers: [WishlistItemController],
  providers: [WishlistItemService, WishlistItemResolver],
  exports: [WishlistItemService],
})
export class WishlistItemModule {}
