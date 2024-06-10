import { Module } from "@nestjs/common";
import { PromotionsModuleBase } from "./base/promotions.module.base";
import { PromotionsService } from "./promotions.service";
import { PromotionsController } from "./promotions.controller";
import { PromotionsResolver } from "./promotions.resolver";

@Module({
  imports: [PromotionsModuleBase],
  controllers: [PromotionsController],
  providers: [PromotionsService, PromotionsResolver],
  exports: [PromotionsService],
})
export class PromotionsModule {}
