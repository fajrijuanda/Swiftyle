import { Module } from "@nestjs/common";
import { PaymentsModuleBase } from "./base/payments.module.base";
import { PaymentsService } from "./payments.service";
import { PaymentsController } from "./payments.controller";
import { PaymentsResolver } from "./payments.resolver";

@Module({
  imports: [PaymentsModuleBase],
  controllers: [PaymentsController],
  providers: [PaymentsService, PaymentsResolver],
  exports: [PaymentsService],
})
export class PaymentsModule {}
