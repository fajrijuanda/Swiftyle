import { ProductPromotionWhereInput } from "./ProductPromotionWhereInput";
import { ProductPromotionOrderByInput } from "./ProductPromotionOrderByInput";

export type ProductPromotionFindManyArgs = {
  where?: ProductPromotionWhereInput;
  orderBy?: Array<ProductPromotionOrderByInput>;
  skip?: number;
  take?: number;
};
