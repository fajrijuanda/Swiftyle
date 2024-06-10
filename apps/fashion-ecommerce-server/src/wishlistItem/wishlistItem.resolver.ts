import * as graphql from "@nestjs/graphql";
import { WishlistItemResolverBase } from "./base/wishlistItem.resolver.base";
import { WishlistItem } from "./base/WishlistItem";
import { WishlistItemService } from "./wishlistItem.service";

@graphql.Resolver(() => WishlistItem)
export class WishlistItemResolver extends WishlistItemResolverBase {
  constructor(protected readonly service: WishlistItemService) {
    super(service);
  }
}
