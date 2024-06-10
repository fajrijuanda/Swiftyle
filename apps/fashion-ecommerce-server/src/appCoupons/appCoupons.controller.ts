import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppCouponsService } from "./appCoupons.service";
import { AppCouponsControllerBase } from "./base/appCoupons.controller.base";

@swagger.ApiTags("appCoupons")
@common.Controller("appCoupons")
export class AppCouponsController extends AppCouponsControllerBase {
  constructor(protected readonly service: AppCouponsService) {
    super(service);
  }
}
