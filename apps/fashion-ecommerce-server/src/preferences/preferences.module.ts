import { Module } from "@nestjs/common";
import { PreferencesModuleBase } from "./base/preferences.module.base";
import { PreferencesService } from "./preferences.service";
import { PreferencesController } from "./preferences.controller";
import { PreferencesResolver } from "./preferences.resolver";

@Module({
  imports: [PreferencesModuleBase],
  controllers: [PreferencesController],
  providers: [PreferencesService, PreferencesResolver],
  exports: [PreferencesService],
})
export class PreferencesModule {}
