import * as graphql from "@nestjs/graphql";
import { RefundRequestResolverBase } from "./base/refundRequest.resolver.base";
import { RefundRequest } from "./base/RefundRequest";
import { RefundRequestService } from "./refundRequest.service";

@graphql.Resolver(() => RefundRequest)
export class RefundRequestResolver extends RefundRequestResolverBase {
  constructor(protected readonly service: RefundRequestService) {
    super(service);
  }
}
