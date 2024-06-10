import { MainCategory as TMainCategory } from "../api/mainCategory/MainCategory";

export const MAINCATEGORY_TITLE_FIELD = "id";

export const MainCategoryTitle = (record: TMainCategory): string => {
  return record.id?.toString() || String(record.id);
};
