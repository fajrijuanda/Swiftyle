import { WishlistItemWhereInput } from "./WishlistItemWhereInput";
import { WishlistItemOrderByInput } from "./WishlistItemOrderByInput";

export type WishlistItemFindManyArgs = {
  where?: WishlistItemWhereInput;
  orderBy?: Array<WishlistItemOrderByInput>;
  skip?: number;
  take?: number;
};
