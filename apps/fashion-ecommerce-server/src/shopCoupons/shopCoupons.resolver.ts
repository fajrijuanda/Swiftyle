import * as graphql from "@nestjs/graphql";
import { ShopCouponsResolverBase } from "./base/shopCoupons.resolver.base";
import { ShopCoupons } from "./base/ShopCoupons";
import { ShopCouponsService } from "./shopCoupons.service";

@graphql.Resolver(() => ShopCoupons)
export class ShopCouponsResolver extends ShopCouponsResolverBase {
  constructor(protected readonly service: ShopCouponsService) {
    super(service);
  }
}
