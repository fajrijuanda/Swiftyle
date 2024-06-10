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
import { Style } from "./Style";
import { StyleCountArgs } from "./StyleCountArgs";
import { StyleFindManyArgs } from "./StyleFindManyArgs";
import { StyleFindUniqueArgs } from "./StyleFindUniqueArgs";
import { DeleteStyleArgs } from "./DeleteStyleArgs";
import { StyleService } from "../style.service";
@graphql.Resolver(() => Style)
export class StyleResolverBase {
  constructor(protected readonly service: StyleService) {}

  async _stylesMeta(
    @graphql.Args() args: StyleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Style])
  async styles(@graphql.Args() args: StyleFindManyArgs): Promise<Style[]> {
    return this.service.styles(args);
  }

  @graphql.Query(() => Style, { nullable: true })
  async style(
    @graphql.Args() args: StyleFindUniqueArgs
  ): Promise<Style | null> {
    const result = await this.service.style(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Style)
  async deleteStyle(
    @graphql.Args() args: DeleteStyleArgs
  ): Promise<Style | null> {
    try {
      return await this.service.deleteStyle(args);
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