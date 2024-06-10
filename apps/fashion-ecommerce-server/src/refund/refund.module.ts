import { Module } from "@nestjs/common";
import { RefundModuleBase } from "./base/refund.module.base";
import { RefundService } from "./refund.service";
import { RefundController } from "./refund.controller";
import { RefundResolver } from "./refund.resolver";

@Module({
  imports: [RefundModuleBase],
  controllers: [RefundController],
  providers: [RefundService, RefundResolver],
  exports: [RefundService],
})
export class RefundModule {}
