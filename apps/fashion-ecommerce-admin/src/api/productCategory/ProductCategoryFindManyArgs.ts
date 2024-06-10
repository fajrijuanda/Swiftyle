import { ProductCategoryWhereInput } from "./ProductCategoryWhereInput";
import { ProductCategoryOrderByInput } from "./ProductCategoryOrderByInput";

export type ProductCategoryFindManyArgs = {
  where?: ProductCategoryWhereInput;
  orderBy?: Array<ProductCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
