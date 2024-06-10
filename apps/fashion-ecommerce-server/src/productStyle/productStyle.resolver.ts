import * as graphql from "@nestjs/graphql";
import { ProductStyleResolverBase } from "./base/productStyle.resolver.base";
import { ProductStyle } from "./base/ProductStyle";
import { ProductStyleService } from "./productStyle.service";

@graphql.Resolver(() => ProductStyle)
export class ProductStyleResolver extends ProductStyleResolverBase {
  constructor(protected readonly service: ProductStyleService) {
    super(service);
  }
}
