import { Addresses as TAddresses } from "../api/addresses/Addresses";

export const ADDRESSES_TITLE_FIELD = "id";

export const AddressesTitle = (record: TAddresses): string => {
  return record.id?.toString() || String(record.id);
};
