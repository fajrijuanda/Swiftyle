import * as graphql from "@nestjs/graphql";
import { MainCategoryResolverBase } from "./base/mainCategory.resolver.base";
import { MainCategory } from "./base/MainCategory";
import { MainCategoryService } from "./mainCategory.service";

@graphql.Resolver(() => MainCategory)
export class MainCategoryResolver extends MainCategoryResolverBase {
  constructor(protected readonly service: MainCategoryService) {
    super(service);
  }
}
