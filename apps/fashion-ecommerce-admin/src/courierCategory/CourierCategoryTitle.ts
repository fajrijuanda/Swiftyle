import { CourierCategory as TCourierCategory } from "../api/courierCategory/CourierCategory";

export const COURIERCATEGORY_TITLE_FIELD = "id";

export const CourierCategoryTitle = (record: TCourierCategory): string => {
  return record.id?.toString() || String(record.id);
};
