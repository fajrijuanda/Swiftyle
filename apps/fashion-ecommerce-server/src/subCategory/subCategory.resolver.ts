import * as graphql from "@nestjs/graphql";
import { SubCategoryResolverBase } from "./base/subCategory.resolver.base";
import { SubCategory } from "./base/SubCategory";
import { SubCategoryService } from "./subCategory.service";

@graphql.Resolver(() => SubCategory)
export class SubCategoryResolver extends SubCategoryResolverBase {
  constructor(protected readonly service: SubCategoryService) {
    super(service);
  }
}
