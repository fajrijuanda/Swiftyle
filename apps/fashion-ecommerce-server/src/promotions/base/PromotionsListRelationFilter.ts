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
import { PromotionsWhereInput } from "./PromotionsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PromotionsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PromotionsWhereInput,
  })
  @ValidateNested()
  @Type(() => PromotionsWhereInput)
  @IsOptional()
  @Field(() => PromotionsWhereInput, {
    nullable: true,
  })
  every?: PromotionsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PromotionsWhereInput,
  })
  @ValidateNested()
  @Type(() => PromotionsWhereInput)
  @IsOptional()
  @Field(() => PromotionsWhereInput, {
    nullable: true,
  })
  some?: PromotionsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PromotionsWhereInput,
  })
  @ValidateNested()
  @Type(() => PromotionsWhereInput)
  @IsOptional()
  @Field(() => PromotionsWhereInput, {
    nullable: true,
  })
  none?: PromotionsWhereInput;
}
export { PromotionsListRelationFilter as PromotionsListRelationFilter };