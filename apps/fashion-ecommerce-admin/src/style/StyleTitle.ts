import { Style as TStyle } from "../api/style/Style";

export const STYLE_TITLE_FIELD = "id";

export const StyleTitle = (record: TStyle): string => {
  return record.id?.toString() || String(record.id);
};
