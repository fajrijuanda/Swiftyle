/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProductGenreService } from "../productGenre.service";
import { ProductGenreCreateInput } from "./ProductGenreCreateInput";
import { ProductGenre } from "./ProductGenre";
import { ProductGenreFindManyArgs } from "./ProductGenreFindManyArgs";
import { ProductGenreWhereUniqueInput } from "./ProductGenreWhereUniqueInput";
import { ProductGenreUpdateInput } from "./ProductGenreUpdateInput";

export class ProductGenreControllerBase {
  constructor(protected readonly service: ProductGenreService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProductGenre })
  async createProductGenre(
    @common.Body() data: ProductGenreCreateInput
  ): Promise<ProductGenre> {
    return await this.service.createProductGenre({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProductGenre] })
  @ApiNestedQuery(ProductGenreFindManyArgs)
  async productGenres(@common.Req() request: Request): Promise<ProductGenre[]> {
    const args = plainToClass(ProductGenreFindManyArgs, request.query);
    return this.service.productGenres({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProductGenre })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async productGenre(
    @common.Param() params: ProductGenreWhereUniqueInput
  ): Promise<ProductGenre | null> {
    const result = await this.service.productGenre({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProductGenre })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProductGenre(
    @common.Param() params: ProductGenreWhereUniqueInput,
    @common.Body() data: ProductGenreUpdateInput
  ): Promise<ProductGenre | null> {
    try {
      return await this.service.updateProductGenre({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProductGenre })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProductGenre(
    @common.Param() params: ProductGenreWhereUniqueInput
  ): Promise<ProductGenre | null> {
    try {
      return await this.service.deleteProductGenre({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}