/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ProductGenre as PrismaProductGenre } from "@prisma/client";

export class ProductGenreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProductGenreCountArgs, "select">
  ): Promise<number> {
    return this.prisma.productGenre.count(args);
  }

  async productGenres<T extends Prisma.ProductGenreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductGenreFindManyArgs>
  ): Promise<PrismaProductGenre[]> {
    return this.prisma.productGenre.findMany<Prisma.ProductGenreFindManyArgs>(
      args
    );
  }
  async productGenre<T extends Prisma.ProductGenreFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductGenreFindUniqueArgs>
  ): Promise<PrismaProductGenre | null> {
    return this.prisma.productGenre.findUnique(args);
  }
  async createProductGenre<T extends Prisma.ProductGenreCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductGenreCreateArgs>
  ): Promise<PrismaProductGenre> {
    return this.prisma.productGenre.create<T>(args);
  }
  async updateProductGenre<T extends Prisma.ProductGenreUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductGenreUpdateArgs>
  ): Promise<PrismaProductGenre> {
    return this.prisma.productGenre.update<T>(args);
  }
  async deleteProductGenre<T extends Prisma.ProductGenreDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductGenreDeleteArgs>
  ): Promise<PrismaProductGenre> {
    return this.prisma.productGenre.delete(args);
  }
}
