import * as graphql from "@nestjs/graphql";
import { ProductCategoryResolverBase } from "./base/productCategory.resolver.base";
import { ProductCategory } from "./base/ProductCategory";
import { ProductCategoryService } from "./productCategory.service";

@graphql.Resolver(() => ProductCategory)
export class ProductCategoryResolver extends ProductCategoryResolverBase {
  constructor(protected readonly service: ProductCategoryService) {
    super(service);
  }
}
