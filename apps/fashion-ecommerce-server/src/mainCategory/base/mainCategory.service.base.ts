/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MainCategory as PrismaMainCategory } from "@prisma/client";

export class MainCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MainCategoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.mainCategory.count(args);
  }

  async mainCategories<T extends Prisma.MainCategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainCategoryFindManyArgs>
  ): Promise<PrismaMainCategory[]> {
    return this.prisma.mainCategory.findMany<Prisma.MainCategoryFindManyArgs>(
      args
    );
  }
  async mainCategory<T extends Prisma.MainCategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainCategoryFindUniqueArgs>
  ): Promise<PrismaMainCategory | null> {
    return this.prisma.mainCategory.findUnique(args);
  }
  async createMainCategory<T extends Prisma.MainCategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainCategoryCreateArgs>
  ): Promise<PrismaMainCategory> {
    return this.prisma.mainCategory.create<T>(args);
  }
  async updateMainCategory<T extends Prisma.MainCategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainCategoryUpdateArgs>
  ): Promise<PrismaMainCategory> {
    return this.prisma.mainCategory.update<T>(args);
  }
  async deleteMainCategory<T extends Prisma.MainCategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MainCategoryDeleteArgs>
  ): Promise<PrismaMainCategory> {
    return this.prisma.mainCategory.delete(args);
  }
}
