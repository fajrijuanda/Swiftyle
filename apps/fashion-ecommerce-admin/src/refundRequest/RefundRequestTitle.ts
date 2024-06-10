import { RefundRequest as TRefundRequest } from "../api/refundRequest/RefundRequest";

export const REFUNDREQUEST_TITLE_FIELD = "id";

export const RefundRequestTitle = (record: TRefundRequest): string => {
  return record.id?.toString() || String(record.id);
};
