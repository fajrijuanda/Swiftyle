import { Module } from "@nestjs/common";
import { CourierCategoryModuleBase } from "./base/courierCategory.module.base";
import { CourierCategoryService } from "./courierCategory.service";
import { CourierCategoryController } from "./courierCategory.controller";
import { CourierCategoryResolver } from "./courierCategory.resolver";

@Module({
  imports: [CourierCategoryModuleBase],
  controllers: [CourierCategoryController],
  providers: [CourierCategoryService, CourierCategoryResolver],
  exports: [CourierCategoryService],
})
export class CourierCategoryModule {}
