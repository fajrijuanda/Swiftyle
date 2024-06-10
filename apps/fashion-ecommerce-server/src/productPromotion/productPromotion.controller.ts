import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductPromotionService } from "./productPromotion.service";
import { ProductPromotionControllerBase } from "./base/productPromotion.controller.base";

@swagger.ApiTags("productPromotions")
@common.Controller("productPromotions")
export class ProductPromotionController extends ProductPromotionControllerBase {
  constructor(protected readonly service: ProductPromotionService) {
    super(service);
  }
}
