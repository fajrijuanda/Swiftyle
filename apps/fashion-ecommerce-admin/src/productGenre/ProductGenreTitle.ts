import { ProductGenre as TProductGenre } from "../api/productGenre/ProductGenre";

export const PRODUCTGENRE_TITLE_FIELD = "id";

export const ProductGenreTitle = (record: TProductGenre): string => {
  return record.id?.toString() || String(record.id);
};
