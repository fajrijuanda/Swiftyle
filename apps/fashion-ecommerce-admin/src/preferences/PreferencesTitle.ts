import { Preferences as TPreferences } from "../api/preferences/Preferences";

export const PREFERENCES_TITLE_FIELD = "id";

export const PreferencesTitle = (record: TPreferences): string => {
  return record.id?.toString() || String(record.id);
};
