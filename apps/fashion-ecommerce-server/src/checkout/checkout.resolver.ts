import * as graphql from "@nestjs/graphql";
import { CheckoutResolverBase } from "./base/checkout.resolver.base";
import { Checkout } from "./base/Checkout";
import { CheckoutService } from "./checkout.service";

@graphql.Resolver(() => Checkout)
export class CheckoutResolver extends CheckoutResolverBase {
  constructor(protected readonly service: CheckoutService) {
    super(service);
  }
}
