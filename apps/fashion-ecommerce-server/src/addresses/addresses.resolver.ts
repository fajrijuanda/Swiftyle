import * as graphql from "@nestjs/graphql";
import { AddressesResolverBase } from "./base/addresses.resolver.base";
import { Addresses } from "./base/Addresses";
import { AddressesService } from "./addresses.service";

@graphql.Resolver(() => Addresses)
export class AddressesResolver extends AddressesResolverBase {
  constructor(protected readonly service: AddressesService) {
    super(service);
  }
}
