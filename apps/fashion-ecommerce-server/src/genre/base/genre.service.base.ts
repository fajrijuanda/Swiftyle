/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Genre as PrismaGenre } from "@prisma/client";

export class GenreServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.GenreCountArgs, "select">): Promise<number> {
    return this.prisma.genre.count(args);
  }

  async genres<T extends Prisma.GenreFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenreFindManyArgs>
  ): Promise<PrismaGenre[]> {
    return this.prisma.genre.findMany<Prisma.GenreFindManyArgs>(args);
  }
  async genre<T extends Prisma.GenreFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenreFindUniqueArgs>
  ): Promise<PrismaGenre | null> {
    return this.prisma.genre.findUnique(args);
  }
  async createGenre<T extends Prisma.GenreCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenreCreateArgs>
  ): Promise<PrismaGenre> {
    return this.prisma.genre.create<T>(args);
  }
  async updateGenre<T extends Prisma.GenreUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenreUpdateArgs>
  ): Promise<PrismaGenre> {
    return this.prisma.genre.update<T>(args);
  }
  async deleteGenre<T extends Prisma.GenreDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GenreDeleteArgs>
  ): Promise<PrismaGenre> {
    return this.prisma.genre.delete(args);
  }
}
