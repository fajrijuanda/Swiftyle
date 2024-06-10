/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Addresses } from "./Addresses";
import { AddressesCountArgs } from "./AddressesCountArgs";
import { AddressesFindManyArgs } from "./AddressesFindManyArgs";
import { AddressesFindUniqueArgs } from "./AddressesFindUniqueArgs";
import { DeleteAddressesArgs } from "./DeleteAddressesArgs";
import { AddressesService } from "../addresses.service";
@graphql.Resolver(() => Addresses)
export class AddressesResolverBase {
  constructor(protected readonly service: AddressesService) {}

  async _addressesItemsMeta(
    @graphql.Args() args: AddressesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Addresses])
  async addressesItems(
    @graphql.Args() args: AddressesFindManyArgs
  ): Promise<Addresses[]> {
    return this.service.addressesItems(args);
  }

  @graphql.Query(() => Addresses, { nullable: true })
  async addresses(
    @graphql.Args() args: AddressesFindUniqueArgs
  ): Promise<Addresses | null> {
    const result = await this.service.addresses(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Addresses)
  async deleteAddresses(
    @graphql.Args() args: DeleteAddressesArgs
  ): Promise<Addresses | null> {
    try {
      return await this.service.deleteAddresses(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
