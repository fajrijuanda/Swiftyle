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
import { RefundRequestWhereInput } from "./RefundRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RefundRequestOrderByInput } from "./RefundRequestOrderByInput";

@ArgsType()
class RefundRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RefundRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RefundRequestWhereInput, { nullable: true })
  @Type(() => RefundRequestWhereInput)
  where?: RefundRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [RefundRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RefundRequestOrderByInput], { nullable: true })
  @Type(() => RefundRequestOrderByInput)
  orderBy?: Array<RefundRequestOrderByInput>;

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

export { RefundRequestFindManyArgs as RefundRequestFindManyArgs };