import { ProductStyle as TProductStyle } from "../api/productStyle/ProductStyle";

export const PRODUCTSTYLE_TITLE_FIELD = "id";

export const ProductStyleTitle = (record: TProductStyle): string => {
  return record.id?.toString() || String(record.id);
};
