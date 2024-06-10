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
import { CourierCategoryWhereInput } from "./CourierCategoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CourierCategoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CourierCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => CourierCategoryWhereInput)
  @IsOptional()
  @Field(() => CourierCategoryWhereInput, {
    nullable: true,
  })
  every?: CourierCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => CourierCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => CourierCategoryWhereInput)
  @IsOptional()
  @Field(() => CourierCategoryWhereInput, {
    nullable: true,
  })
  some?: CourierCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => CourierCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => CourierCategoryWhereInput)
  @IsOptional()
  @Field(() => CourierCategoryWhereInput, {
    nullable: true,
  })
  none?: CourierCategoryWhereInput;
}
export { CourierCategoryListRelationFilter as CourierCategoryListRelationFilter };