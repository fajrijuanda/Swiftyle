import { Module } from "@nestjs/common";
import { SubCategoryModuleBase } from "./base/subCategory.module.base";
import { SubCategoryService } from "./subCategory.service";
import { SubCategoryController } from "./subCategory.controller";
import { SubCategoryResolver } from "./subCategory.resolver";

@Module({
  imports: [SubCategoryModuleBase],
  controllers: [SubCategoryController],
  providers: [SubCategoryService, SubCategoryResolver],
  exports: [SubCategoryService],
})
export class SubCategoryModule {}
