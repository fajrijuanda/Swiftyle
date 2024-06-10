import * as graphql from "@nestjs/graphql";
import { StyleResolverBase } from "./base/style.resolver.base";
import { Style } from "./base/Style";
import { StyleService } from "./style.service";

@graphql.Resolver(() => Style)
export class StyleResolver extends StyleResolverBase {
  constructor(protected readonly service: StyleService) {
    super(service);
  }
}
