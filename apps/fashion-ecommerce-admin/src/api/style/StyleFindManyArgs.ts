import { StyleWhereInput } from "./StyleWhereInput";
import { StyleOrderByInput } from "./StyleOrderByInput";

export type StyleFindManyArgs = {
  where?: StyleWhereInput;
  orderBy?: Array<StyleOrderByInput>;
  skip?: number;
  take?: number;
};
