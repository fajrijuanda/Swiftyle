import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductCategoryService } from "./productCategory.service";
import { ProductCategoryControllerBase } from "./base/productCategory.controller.base";

@swagger.ApiTags("productCategories")
@common.Controller("productCategories")
export class ProductCategoryController extends ProductCategoryControllerBase {
  constructor(protected readonly service: ProductCategoryService) {
    super(service);
  }
}
