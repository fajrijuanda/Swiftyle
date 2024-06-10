import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductGenreService } from "./productGenre.service";
import { ProductGenreControllerBase } from "./base/productGenre.controller.base";

@swagger.ApiTags("productGenres")
@common.Controller("productGenres")
export class ProductGenreController extends ProductGenreControllerBase {
  constructor(protected readonly service: ProductGenreService) {
    super(service);
  }
}
