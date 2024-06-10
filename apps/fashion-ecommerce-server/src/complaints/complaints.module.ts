import { Module } from "@nestjs/common";
import { ComplaintsModuleBase } from "./base/complaints.module.base";
import { ComplaintsService } from "./complaints.service";
import { ComplaintsController } from "./complaints.controller";
import { ComplaintsResolver } from "./complaints.resolver";

@Module({
  imports: [ComplaintsModuleBase],
  controllers: [ComplaintsController],
  providers: [ComplaintsService, ComplaintsResolver],
  exports: [ComplaintsService],
})
export class ComplaintsModule {}
