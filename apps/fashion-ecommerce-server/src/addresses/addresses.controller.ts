import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AddressesService } from "./addresses.service";
import { AddressesControllerBase } from "./base/addresses.controller.base";

@swagger.ApiTags("addresses")
@common.Controller("addresses")
export class AddressesController extends AddressesControllerBase {
  constructor(protected readonly service: AddressesService) {
    super(service);
  }
}
