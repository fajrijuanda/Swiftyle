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
import { Type } from "class-transformer";

@ArgsType()
class ShopCouponsCountArgs {
  @ApiProperty({
    required: false,
    type: () => ShopCouponsWhereInput,
  })
  @Field(() => ShopCouponsWhereInput, { nullable: true })
  @Type(() => ShopCouponsWhereInput)
  where?: ShopCouponsWhereInput;
}

export { ShopCouponsCountArgs as ShopCouponsCountArgs };