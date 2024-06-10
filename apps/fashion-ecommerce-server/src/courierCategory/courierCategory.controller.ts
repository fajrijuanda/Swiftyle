import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CourierCategoryService } from "./courierCategory.service";
import { CourierCategoryControllerBase } from "./base/courierCategory.controller.base";

@swagger.ApiTags("courierCategories")
@common.Controller("courierCategories")
export class CourierCategoryController extends CourierCategoryControllerBase {
  constructor(protected readonly service: CourierCategoryService) {
    super(service);
  }
}
