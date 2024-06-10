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
import { Preferences } from "./Preferences";
import { PreferencesCountArgs } from "./PreferencesCountArgs";
import { PreferencesFindManyArgs } from "./PreferencesFindManyArgs";
import { PreferencesFindUniqueArgs } from "./PreferencesFindUniqueArgs";
import { DeletePreferencesArgs } from "./DeletePreferencesArgs";
import { PreferencesService } from "../preferences.service";
@graphql.Resolver(() => Preferences)
export class PreferencesResolverBase {
  constructor(protected readonly service: PreferencesService) {}

  async _preferencesItemsMeta(
    @graphql.Args() args: PreferencesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Preferences])
  async preferencesItems(
    @graphql.Args() args: PreferencesFindManyArgs
  ): Promise<Preferences[]> {
    return this.service.preferencesItems(args);
  }

  @graphql.Query(() => Preferences, { nullable: true })
  async preferences(
    @graphql.Args() args: PreferencesFindUniqueArgs
  ): Promise<Preferences | null> {
    const result = await this.service.preferences(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Preferences)
  async deletePreferences(
    @graphql.Args() args: DeletePreferencesArgs
  ): Promise<Preferences | null> {
    try {
      return await this.service.deletePreferences(args);
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
