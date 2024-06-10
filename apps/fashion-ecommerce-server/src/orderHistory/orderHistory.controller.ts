import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrderHistoryService } from "./orderHistory.service";
import { OrderHistoryControllerBase } from "./base/orderHistory.controller.base";

@swagger.ApiTags("orderHistories")
@common.Controller("orderHistories")
export class OrderHistoryController extends OrderHistoryControllerBase {
  constructor(protected readonly service: OrderHistoryService) {
    super(service);
  }
}
