import { OrderHistoryWhereInput } from "./OrderHistoryWhereInput";
import { OrderHistoryOrderByInput } from "./OrderHistoryOrderByInput";

export type OrderHistoryFindManyArgs = {
  where?: OrderHistoryWhereInput;
  orderBy?: Array<OrderHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
