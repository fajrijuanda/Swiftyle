/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductGenreWhereInput } from "./ProductGenreWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProductGenreOrderByInput } from "./ProductGenreOrderByInput";

@ArgsType()
class ProductGenreFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductGenreWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProductGenreWhereInput, { nullable: true })
  @Type(() => ProductGenreWhereInput)
  where?: ProductGenreWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductGenreOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProductGenreOrderByInput], { nullable: true })
  @Type(() => ProductGenreOrderByInput)
  orderBy?: Array<ProductGenreOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProductGenreFindManyArgs as ProductGenreFindManyArgs };
