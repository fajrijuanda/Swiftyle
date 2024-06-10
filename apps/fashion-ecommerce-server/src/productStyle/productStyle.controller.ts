import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductStyleService } from "./productStyle.service";
import { ProductStyleControllerBase } from "./base/productStyle.controller.base";

@swagger.ApiTags("productStyles")
@common.Controller("productStyles")
export class ProductStyleController extends ProductStyleControllerBase {
  constructor(protected readonly service: ProductStyleService) {
    super(service);
  }
}
