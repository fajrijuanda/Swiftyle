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
import { ShopCouponsWhereInput } from "./ShopCouponsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ShopCouponsOrderByInput } from "./ShopCouponsOrderByInput";

@ArgsType()
class ShopCouponsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ShopCouponsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ShopCouponsWhereInput, { nullable: true })
  @Type(() => ShopCouponsWhereInput)
  where?: ShopCouponsWhereInput;

  @ApiProperty({
    required: false,
    type: [ShopCouponsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ShopCouponsOrderByInput], { nullable: true })
  @Type(() => ShopCouponsOrderByInput)
  orderBy?: Array<ShopCouponsOrderByInput>;

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

export { ShopCouponsFindManyArgs as ShopCouponsFindManyArgs };
