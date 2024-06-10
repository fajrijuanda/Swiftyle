import * as graphql from "@nestjs/graphql";
import { PaymentsResolverBase } from "./base/payments.resolver.base";
import { Payments } from "./base/Payments";
import { PaymentsService } from "./payments.service";

@graphql.Resolver(() => Payments)
export class PaymentsResolver extends PaymentsResolverBase {
  constructor(protected readonly service: PaymentsService) {
    super(service);
  }
}
