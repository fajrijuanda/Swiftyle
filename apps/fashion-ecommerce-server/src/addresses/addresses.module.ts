import { Module } from "@nestjs/common";
import { AddressesModuleBase } from "./base/addresses.module.base";
import { AddressesService } from "./addresses.service";
import { AddressesController } from "./addresses.controller";
import { AddressesResolver } from "./addresses.resolver";

@Module({
  imports: [AddressesModuleBase],
  controllers: [AddressesController],
  providers: [AddressesService, AddressesResolver],
  exports: [AddressesService],
})
export class AddressesModule {}
