import { ProductGenreWhereInput } from "./ProductGenreWhereInput";
import { ProductGenreOrderByInput } from "./ProductGenreOrderByInput";

export type ProductGenreFindManyArgs = {
  where?: ProductGenreWhereInput;
  orderBy?: Array<ProductGenreOrderByInput>;
  skip?: number;
  take?: number;
};
