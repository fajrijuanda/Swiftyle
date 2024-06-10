import { Module } from "@nestjs/common";
import { ProductStyleModuleBase } from "./base/productStyle.module.base";
import { ProductStyleService } from "./productStyle.service";
import { ProductStyleController } from "./productStyle.controller";
import { ProductStyleResolver } from "./productStyle.resolver";

@Module({
  imports: [ProductStyleModuleBase],
  controllers: [ProductStyleController],
  providers: [ProductStyleService, ProductStyleResolver],
  exports: [ProductStyleService],
})
export class ProductStyleModule {}
