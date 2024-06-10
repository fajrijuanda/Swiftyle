import { ProductCategory as TProductCategory } from "../api/productCategory/ProductCategory";

export const PRODUCTCATEGORY_TITLE_FIELD = "id";

export const ProductCategoryTitle = (record: TProductCategory): string => {
  return record.id?.toString() || String(record.id);
};
