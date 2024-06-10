import { ShopCoupons as TShopCoupons } from "../api/shopCoupons/ShopCoupons";

export const SHOPCOUPONS_TITLE_FIELD = "id";

export const ShopCouponsTitle = (record: TShopCoupons): string => {
  return record.id?.toString() || String(record.id);
};
