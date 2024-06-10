/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductPromotionWhereInput } from "./ProductPromotionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProductPromotionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProductPromotionWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductPromotionWhereInput)
  @IsOptional()
  @Field(() => ProductPromotionWhereInput, {
    nullable: true,
  })
  every?: ProductPromotionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductPromotionWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductPromotionWhereInput)
  @IsOptional()
  @Field(() => ProductPromotionWhereInput, {
    nullable: true,
  })
  some?: ProductPromotionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProductPromotionWhereInput,
  })
  @ValidateNested()
  @Type(() => ProductPromotionWhereInput)
  @IsOptional()
  @Field(() => ProductPromotionWhereInput, {
    nullable: true,
  })
  none?: ProductPromotionWhereInput;
}
export { ProductPromotionListRelationFilter as ProductPromotionListRelationFilter };
