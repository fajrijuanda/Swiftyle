import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CheckoutService } from "./checkout.service";
import { CheckoutControllerBase } from "./base/checkout.controller.base";

@swagger.ApiTags("checkouts")
@common.Controller("checkouts")
export class CheckoutController extends CheckoutControllerBase {
  constructor(protected readonly service: CheckoutService) {
    super(service);
  }
}
