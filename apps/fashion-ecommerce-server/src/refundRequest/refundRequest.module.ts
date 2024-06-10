import { Module } from "@nestjs/common";
import { RefundRequestModuleBase } from "./base/refundRequest.module.base";
import { RefundRequestService } from "./refundRequest.service";
import { RefundRequestController } from "./refundRequest.controller";
import { RefundRequestResolver } from "./refundRequest.resolver";

@Module({
  imports: [RefundRequestModuleBase],
  controllers: [RefundRequestController],
  providers: [RefundRequestService, RefundRequestResolver],
  exports: [RefundRequestService],
})
export class RefundRequestModule {}
