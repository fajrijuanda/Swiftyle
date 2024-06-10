import * as graphql from "@nestjs/graphql";
import { CourierCategoryResolverBase } from "./base/courierCategory.resolver.base";
import { CourierCategory } from "./base/CourierCategory";
import { CourierCategoryService } from "./courierCategory.service";

@graphql.Resolver(() => CourierCategory)
export class CourierCategoryResolver extends CourierCategoryResolverBase {
  constructor(protected readonly service: CourierCategoryService) {
    super(service);
  }
}
