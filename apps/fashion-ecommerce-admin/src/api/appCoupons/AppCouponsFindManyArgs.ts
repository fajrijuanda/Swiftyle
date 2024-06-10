import { AppCouponsWhereInput } from "./AppCouponsWhereInput";
import { AppCouponsOrderByInput } from "./AppCouponsOrderByInput";

export type AppCouponsFindManyArgs = {
  where?: AppCouponsWhereInput;
  orderBy?: Array<AppCouponsOrderByInput>;
  skip?: number;
  take?: number;
};
