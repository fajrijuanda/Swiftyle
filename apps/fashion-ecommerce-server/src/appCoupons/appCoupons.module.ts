import { Module } from "@nestjs/common";
import { AppCouponsModuleBase } from "./base/appCoupons.module.base";
import { AppCouponsService } from "./appCoupons.service";
import { AppCouponsController } from "./appCoupons.controller";
import { AppCouponsResolver } from "./appCoupons.resolver";

@Module({
  imports: [AppCouponsModuleBase],
  controllers: [AppCouponsController],
  providers: [AppCouponsService, AppCouponsResolver],
  exports: [AppCouponsService],
})
export class AppCouponsModule {}
