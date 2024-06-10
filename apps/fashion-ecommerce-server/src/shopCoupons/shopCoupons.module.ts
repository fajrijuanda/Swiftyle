import { Module } from "@nestjs/common";
import { ShopCouponsModuleBase } from "./base/shopCoupons.module.base";
import { ShopCouponsService } from "./shopCoupons.service";
import { ShopCouponsController } from "./shopCoupons.controller";
import { ShopCouponsResolver } from "./shopCoupons.resolver";

@Module({
  imports: [ShopCouponsModuleBase],
  controllers: [ShopCouponsController],
  providers: [ShopCouponsService, ShopCouponsResolver],
  exports: [ShopCouponsService],
})
export class ShopCouponsModule {}
