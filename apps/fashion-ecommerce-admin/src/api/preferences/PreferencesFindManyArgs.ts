import { PreferencesWhereInput } from "./PreferencesWhereInput";
import { PreferencesOrderByInput } from "./PreferencesOrderByInput";

export type PreferencesFindManyArgs = {
  where?: PreferencesWhereInput;
  orderBy?: Array<PreferencesOrderByInput>;
  skip?: number;
  take?: number;
};
