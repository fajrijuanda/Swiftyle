import { Promotions as TPromotions } from "../api/promotions/Promotions";

export const PROMOTIONS_TITLE_FIELD = "id";

export const PromotionsTitle = (record: TPromotions): string => {
  return record.id?.toString() || String(record.id);
};
