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
import { AddressesWhereInput } from "./AddressesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AddressesOrderByInput } from "./AddressesOrderByInput";

@ArgsType()
class AddressesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AddressesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AddressesWhereInput, { nullable: true })
  @Type(() => AddressesWhereInput)
  where?: AddressesWhereInput;

  @ApiProperty({
    required: false,
    type: [AddressesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AddressesOrderByInput], { nullable: true })
  @Type(() => AddressesOrderByInput)
  orderBy?: Array<AddressesOrderByInput>;

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

export { AddressesFindManyArgs as AddressesFindManyArgs };
