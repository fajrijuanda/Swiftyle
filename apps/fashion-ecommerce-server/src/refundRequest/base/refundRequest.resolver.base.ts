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
import { RefundRequest } from "./RefundRequest";
import { RefundRequestCountArgs } from "./RefundRequestCountArgs";
import { RefundRequestFindManyArgs } from "./RefundRequestFindManyArgs";
import { RefundRequestFindUniqueArgs } from "./RefundRequestFindUniqueArgs";
import { DeleteRefundRequestArgs } from "./DeleteRefundRequestArgs";
import { RefundRequestService } from "../refundRequest.service";
@graphql.Resolver(() => RefundRequest)
export class RefundRequestResolverBase {
  constructor(protected readonly service: RefundRequestService) {}

  async _refundRequestsMeta(
    @graphql.Args() args: RefundRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [RefundRequest])
  async refundRequests(
    @graphql.Args() args: RefundRequestFindManyArgs
  ): Promise<RefundRequest[]> {
    return this.service.refundRequests(args);
  }

  @graphql.Query(() => RefundRequest, { nullable: true })
  async refundRequest(
    @graphql.Args() args: RefundRequestFindUniqueArgs
  ): Promise<RefundRequest | null> {
    const result = await this.service.refundRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RefundRequest)
  async deleteRefundRequest(
    @graphql.Args() args: DeleteRefundRequestArgs
  ): Promise<RefundRequest | null> {
    try {
      return await this.service.deleteRefundRequest(args);
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