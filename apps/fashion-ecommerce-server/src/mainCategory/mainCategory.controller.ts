import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MainCategoryService } from "./mainCategory.service";
import { MainCategoryControllerBase } from "./base/mainCategory.controller.base";

@swagger.ApiTags("mainCategories")
@common.Controller("mainCategories")
export class MainCategoryController extends MainCategoryControllerBase {
  constructor(protected readonly service: MainCategoryService) {
    super(service);
  }
}
