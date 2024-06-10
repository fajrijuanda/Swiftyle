import { Module } from "@nestjs/common";
import { OrderHistoryModuleBase } from "./base/orderHistory.module.base";
import { OrderHistoryService } from "./orderHistory.service";
import { OrderHistoryController } from "./orderHistory.controller";
import { OrderHistoryResolver } from "./orderHistory.resolver";

@Module({
  imports: [OrderHistoryModuleBase],
  controllers: [OrderHistoryController],
  providers: [OrderHistoryService, OrderHistoryResolver],
  exports: [OrderHistoryService],
})
export class OrderHistoryModule {}
