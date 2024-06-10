import * as graphql from "@nestjs/graphql";
import { RefundResolverBase } from "./base/refund.resolver.base";
import { Refund } from "./base/Refund";
import { RefundService } from "./refund.service";

@graphql.Resolver(() => Refund)
export class RefundResolver extends RefundResolverBase {
  constructor(protected readonly service: RefundService) {
    super(service);
  }
}
