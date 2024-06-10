import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentsService } from "./payments.service";
import { PaymentsControllerBase } from "./base/payments.controller.base";

@swagger.ApiTags("payments")
@common.Controller("payments")
export class PaymentsController extends PaymentsControllerBase {
  constructor(protected readonly service: PaymentsService) {
    super(service);
  }
}
