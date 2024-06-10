import { ProductStyleWhereInput } from "./ProductStyleWhereInput";
import { ProductStyleOrderByInput } from "./ProductStyleOrderByInput";

export type ProductStyleFindManyArgs = {
  where?: ProductStyleWhereInput;
  orderBy?: Array<ProductStyleOrderByInput>;
  skip?: number;
  take?: number;
};
