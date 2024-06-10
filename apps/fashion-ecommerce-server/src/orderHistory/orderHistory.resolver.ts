import * as graphql from "@nestjs/graphql";
import { OrderHistoryResolverBase } from "./base/orderHistory.resolver.base";
import { OrderHistory } from "./base/OrderHistory";
import { OrderHistoryService } from "./orderHistory.service";

@graphql.Resolver(() => OrderHistory)
export class OrderHistoryResolver extends OrderHistoryResolverBase {
  constructor(protected readonly service: OrderHistoryService) {
    super(service);
  }
}
