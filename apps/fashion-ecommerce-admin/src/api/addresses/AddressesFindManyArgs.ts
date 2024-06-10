import { AddressesWhereInput } from "./AddressesWhereInput";
import { AddressesOrderByInput } from "./AddressesOrderByInput";

export type AddressesFindManyArgs = {
  where?: AddressesWhereInput;
  orderBy?: Array<AddressesOrderByInput>;
  skip?: number;
  take?: number;
};
