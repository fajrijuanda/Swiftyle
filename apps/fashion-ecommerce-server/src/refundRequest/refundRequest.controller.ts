import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RefundRequestService } from "./refundRequest.service";
import { RefundRequestControllerBase } from "./base/refundRequest.controller.base";

@swagger.ApiTags("refundRequests")
@common.Controller("refundRequests")
export class RefundRequestController extends RefundRequestControllerBase {
  constructor(protected readonly service: RefundRequestService) {
    super(service);
  }
}
