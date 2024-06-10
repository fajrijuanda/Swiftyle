import { Checkout as TCheckout } from "../api/checkout/Checkout";

export const CHECKOUT_TITLE_FIELD = "id";

export const CheckoutTitle = (record: TCheckout): string => {
  return record.id?.toString() || String(record.id);
};
