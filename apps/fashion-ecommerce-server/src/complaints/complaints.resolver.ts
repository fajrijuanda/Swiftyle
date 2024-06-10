import * as graphql from "@nestjs/graphql";
import { ComplaintsResolverBase } from "./base/complaints.resolver.base";
import { Complaints } from "./base/Complaints";
import { ComplaintsService } from "./complaints.service";

@graphql.Resolver(() => Complaints)
export class ComplaintsResolver extends ComplaintsResolverBase {
  constructor(protected readonly service: ComplaintsService) {
    super(service);
  }
}
