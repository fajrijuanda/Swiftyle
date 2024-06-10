import * as graphql from "@nestjs/graphql";
import { PreferencesResolverBase } from "./base/preferences.resolver.base";
import { Preferences } from "./base/Preferences";
import { PreferencesService } from "./preferences.service";

@graphql.Resolver(() => Preferences)
export class PreferencesResolver extends PreferencesResolverBase {
  constructor(protected readonly service: PreferencesService) {
    super(service);
  }
}
