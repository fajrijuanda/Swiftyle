import { Complaints as TComplaints } from "../api/complaints/Complaints";

export const COMPLAINTS_TITLE_FIELD = "id";

export const ComplaintsTitle = (record: TComplaints): string => {
  return record.id?.toString() || String(record.id);
};
