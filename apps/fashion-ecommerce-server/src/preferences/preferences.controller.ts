import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PreferencesService } from "./preferences.service";
import { PreferencesControllerBase } from "./base/preferences.controller.base";

@swagger.ApiTags("preferences")
@common.Controller("preferences")
export class PreferencesController extends PreferencesControllerBase {
  constructor(protected readonly service: PreferencesService) {
    super(service);
  }
}
