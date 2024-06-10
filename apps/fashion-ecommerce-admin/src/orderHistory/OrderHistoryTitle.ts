import { OrderHistory as TOrderHistory } from "../api/orderHistory/OrderHistory";

export const ORDERHISTORY_TITLE_FIELD = "id";

export const OrderHistoryTitle = (record: TOrderHistory): string => {
  return record.id?.toString() || String(record.id);
};
