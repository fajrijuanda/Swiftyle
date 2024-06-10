import { RefundRequestWhereInput } from "./RefundRequestWhereInput";
import { RefundRequestOrderByInput } from "./RefundRequestOrderByInput";

export type RefundRequestFindManyArgs = {
  where?: RefundRequestWhereInput;
  orderBy?: Array<RefundRequestOrderByInput>;
  skip?: number;
  take?: number;
};
