import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromotionsService } from "./promotions.service";
import { PromotionsControllerBase } from "./base/promotions.controller.base";

@swagger.ApiTags("promotions")
@common.Controller("promotions")
export class PromotionsController extends PromotionsControllerBase {
  constructor(protected readonly service: PromotionsService) {
    super(service);
  }
}
