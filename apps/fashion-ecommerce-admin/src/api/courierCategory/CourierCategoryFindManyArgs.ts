import { CourierCategoryWhereInput } from "./CourierCategoryWhereInput";
import { CourierCategoryOrderByInput } from "./CourierCategoryOrderByInput";

export type CourierCategoryFindManyArgs = {
  where?: CourierCategoryWhereInput;
  orderBy?: Array<CourierCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
