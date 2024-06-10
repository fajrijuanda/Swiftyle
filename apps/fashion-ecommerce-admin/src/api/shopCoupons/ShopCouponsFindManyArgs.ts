import { ShopCouponsWhereInput } from "./ShopCouponsWhereInput";
import { ShopCouponsOrderByInput } from "./ShopCouponsOrderByInput";

export type ShopCouponsFindManyArgs = {
  where?: ShopCouponsWhereInput;
  orderBy?: Array<ShopCouponsOrderByInput>;
  skip?: number;
  take?: number;
};
