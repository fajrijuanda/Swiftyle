import { PromotionsWhereInput } from "./PromotionsWhereInput";
import { PromotionsOrderByInput } from "./PromotionsOrderByInput";

export type PromotionsFindManyArgs = {
  where?: PromotionsWhereInput;
  orderBy?: Array<PromotionsOrderByInput>;
  skip?: number;
  take?: number;
};
