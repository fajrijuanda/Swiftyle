import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PreferencesServiceBase } from "./base/preferences.service.base";

@Injectable()
export class PreferencesService extends PreferencesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
