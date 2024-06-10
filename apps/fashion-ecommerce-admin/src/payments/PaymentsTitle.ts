import { Payments as TPayments } from "../api/payments/Payments";

export const PAYMENTS_TITLE_FIELD = "id";

export const PaymentsTitle = (record: TPayments): string => {
  return record.id?.toString() || String(record.id);
};
