import { atom } from "recoil";
import { TabDivision } from "../models/client/Tab";

export const selectedTabState = atom<TabDivision>({
  key: "selectedTabState",
  default: TabDivision.TODAY,
});
