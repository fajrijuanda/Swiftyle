import { CheckoutWhereInput } from "./CheckoutWhereInput";
import { CheckoutOrderByInput } from "./CheckoutOrderByInput";

export type CheckoutFindManyArgs = {
  where?: CheckoutWhereInput;
  orderBy?: Array<CheckoutOrderByInput>;
  skip?: number;
  take?: number;
};
