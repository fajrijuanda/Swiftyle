import { Module } from "@nestjs/common";
import { CheckoutModuleBase } from "./base/checkout.module.base";
import { CheckoutService } from "./checkout.service";
import { CheckoutController } from "./checkout.controller";
import { CheckoutResolver } from "./checkout.resolver";

@Module({
  imports: [CheckoutModuleBase],
  controllers: [CheckoutController],
  providers: [CheckoutService, CheckoutResolver],
  exports: [CheckoutService],
})
export class CheckoutModule {}
