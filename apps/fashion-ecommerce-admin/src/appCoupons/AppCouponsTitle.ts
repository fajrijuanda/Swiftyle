import { AppCoupons as TAppCoupons } from "../api/appCoupons/AppCoupons";

export const APPCOUPONS_TITLE_FIELD = "id";

export const AppCouponsTitle = (record: TAppCoupons): string => {
  return record.id?.toString() || String(record.id);
};
