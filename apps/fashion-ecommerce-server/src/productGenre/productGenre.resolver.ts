import * as graphql from "@nestjs/graphql";
import { ProductGenreResolverBase } from "./base/productGenre.resolver.base";
import { ProductGenre } from "./base/ProductGenre";
import { ProductGenreService } from "./productGenre.service";

@graphql.Resolver(() => ProductGenre)
export class ProductGenreResolver extends ProductGenreResolverBase {
  constructor(protected readonly service: ProductGenreService) {
    super(service);
  }
}
