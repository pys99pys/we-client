import { atom } from "recoil";
import { ScheduleType } from "../models/client/ScheduleType";

export const selectedTabState = atom<ScheduleType>({
  key: "selectedTabState",
  default: ScheduleType.TODAY,
});
