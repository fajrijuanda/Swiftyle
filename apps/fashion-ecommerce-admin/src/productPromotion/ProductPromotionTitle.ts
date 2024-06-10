import { ProductPromotion as TProductPromotion } from "../api/productPromotion/ProductPromotion";

export const PRODUCTPROMOTION_TITLE_FIELD = "id";

export const ProductPromotionTitle = (record: TProductPromotion): string => {
  return record.id?.toString() || String(record.id);
};
