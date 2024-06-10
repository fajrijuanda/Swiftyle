import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AddressesServiceBase } from "./base/addresses.service.base";

@Injectable()
export class AddressesService extends AddressesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
