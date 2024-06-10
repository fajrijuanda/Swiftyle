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
import { Shipping } from "./Shipping";
import { ShippingCountArgs } from "./ShippingCountArgs";
import { ShippingFindManyArgs } from "./ShippingFindManyArgs";
import { ShippingFindUniqueArgs } from "./ShippingFindUniqueArgs";
import { DeleteShippingArgs } from "./DeleteShippingArgs";
import { ShippingService } from "../shipping.service";
@graphql.Resolver(() => Shipping)
export class ShippingResolverBase {
  constructor(protected readonly service: ShippingService) {}

  async _shippingsMeta(
    @graphql.Args() args: ShippingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Shipping])
  async shippings(
    @graphql.Args() args: ShippingFindManyArgs
  ): Promise<Shipping[]> {
    return this.service.shippings(args);
  }

  @graphql.Query(() => Shipping, { nullable: true })
  async shipping(
    @graphql.Args() args: ShippingFindUniqueArgs
  ): Promise<Shipping | null> {
    const result = await this.service.shipping(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Shipping)
  async deleteShipping(
    @graphql.Args() args: DeleteShippingArgs
  ): Promise<Shipping | null> {
    try {
      return await this.service.deleteShipping(args);
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
