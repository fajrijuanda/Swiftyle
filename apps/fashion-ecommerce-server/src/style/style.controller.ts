import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StyleService } from "./style.service";
import { StyleControllerBase } from "./base/style.controller.base";

@swagger.ApiTags("styles")
@common.Controller("styles")
export class StyleController extends StyleControllerBase {
  constructor(protected readonly service: StyleService) {
    super(service);
  }
}
