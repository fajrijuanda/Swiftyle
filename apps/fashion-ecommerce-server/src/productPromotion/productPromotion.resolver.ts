import * as graphql from "@nestjs/graphql";
import { ProductPromotionResolverBase } from "./base/productPromotion.resolver.base";
import { ProductPromotion } from "./base/ProductPromotion";
import { ProductPromotionService } from "./productPromotion.service";

@graphql.Resolver(() => ProductPromotion)
export class ProductPromotionResolver extends ProductPromotionResolverBase {
  constructor(protected readonly service: ProductPromotionService) {
    super(service);
  }
}
