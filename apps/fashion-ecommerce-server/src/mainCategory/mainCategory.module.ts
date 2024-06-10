import { Module } from "@nestjs/common";
import { MainCategoryModuleBase } from "./base/mainCategory.module.base";
import { MainCategoryService } from "./mainCategory.service";
import { MainCategoryController } from "./mainCategory.controller";
import { MainCategoryResolver } from "./mainCategory.resolver";

@Module({
  imports: [MainCategoryModuleBase],
  controllers: [MainCategoryController],
  providers: [MainCategoryService, MainCategoryResolver],
  exports: [MainCategoryService],
})
export class MainCategoryModule {}
