import { Module } from "@nestjs/common";
import { ProductPromotionModuleBase } from "./base/productPromotion.module.base";
import { ProductPromotionService } from "./productPromotion.service";
import { ProductPromotionController } from "./productPromotion.controller";
import { ProductPromotionResolver } from "./productPromotion.resolver";

@Module({
  imports: [ProductPromotionModuleBase],
  controllers: [ProductPromotionController],
  providers: [ProductPromotionService, ProductPromotionResolver],
  exports: [ProductPromotionService],
})
export class ProductPromotionModule {}
