import { WishlistItem as TWishlistItem } from "../api/wishlistItem/WishlistItem";

export const WISHLISTITEM_TITLE_FIELD = "id";

export const WishlistItemTitle = (record: TWishlistItem): string => {
  return record.id?.toString() || String(record.id);
};
