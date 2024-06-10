import { Module } from "@nestjs/common";
import { ProductGenreModuleBase } from "./base/productGenre.module.base";
import { ProductGenreService } from "./productGenre.service";
import { ProductGenreController } from "./productGenre.controller";
import { ProductGenreResolver } from "./productGenre.resolver";

@Module({
  imports: [ProductGenreModuleBase],
  controllers: [ProductGenreController],
  providers: [ProductGenreService, ProductGenreResolver],
  exports: [ProductGenreService],
})
export class ProductGenreModule {}
