import * as graphql from "@nestjs/graphql";
import { PromotionsResolverBase } from "./base/promotions.resolver.base";
import { Promotions } from "./base/Promotions";
import { PromotionsService } from "./promotions.service";

@graphql.Resolver(() => Promotions)
export class PromotionsResolver extends PromotionsResolverBase {
  constructor(protected readonly service: PromotionsService) {
    super(service);
  }
}
