import * as graphql from "@nestjs/graphql";
import { AppCouponsResolverBase } from "./base/appCoupons.resolver.base";
import { AppCoupons } from "./base/AppCoupons";
import { AppCouponsService } from "./appCoupons.service";

@graphql.Resolver(() => AppCoupons)
export class AppCouponsResolver extends AppCouponsResolverBase {
  constructor(protected readonly service: AppCouponsService) {
    super(service);
  }
}
