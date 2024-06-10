import { Module } from "@nestjs/common";
import { StyleModuleBase } from "./base/style.module.base";
import { StyleService } from "./style.service";
import { StyleController } from "./style.controller";
import { StyleResolver } from "./style.resolver";

@Module({
  imports: [StyleModuleBase],
  controllers: [StyleController],
  providers: [StyleService, StyleResolver],
  exports: [StyleService],
})
export class StyleModule {}
