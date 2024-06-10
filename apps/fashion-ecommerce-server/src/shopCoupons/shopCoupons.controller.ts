import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShopCouponsService } from "./shopCoupons.service";
import { ShopCouponsControllerBase } from "./base/shopCoupons.controller.base";

@swagger.ApiTags("shopCoupons")
@common.Controller("shopCoupons")
export class ShopCouponsController extends ShopCouponsControllerBase {
  constructor(protected readonly service: ShopCouponsService) {
    super(service);
  }
}
