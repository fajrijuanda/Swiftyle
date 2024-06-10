import { PaymentsWhereInput } from "./PaymentsWhereInput";
import { PaymentsOrderByInput } from "./PaymentsOrderByInput";

export type PaymentsFindManyArgs = {
  where?: PaymentsWhereInput;
  orderBy?: Array<PaymentsOrderByInput>;
  skip?: number;
  take?: number;
};
