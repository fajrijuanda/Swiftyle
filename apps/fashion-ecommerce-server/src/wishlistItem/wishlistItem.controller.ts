import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WishlistItemService } from "./wishlistItem.service";
import { WishlistItemControllerBase } from "./base/wishlistItem.controller.base";

@swagger.ApiTags("wishlistItems")
@common.Controller("wishlistItems")
export class WishlistItemController extends WishlistItemControllerBase {
  constructor(protected readonly service: WishlistItemService) {
    super(service);
  }
}
