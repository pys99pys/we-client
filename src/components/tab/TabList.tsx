import { FC } from "react";
import { ScheduleType } from "../../models/client/ScheduleType";
import css from "./TabList.module.css";

interface TabListProps {
  selectedTab: ScheduleType;
  onChange: (selectedTab: ScheduleType) => void;
}

const TabList: FC<TabListProps> = ({ selectedTab, onChange }) => {
  return (
    <ul className={css.TabList}>
      {Object.keys(ScheduleType).map((division) => (
        <li
          key={division}
          className={division === selectedTab ? css.active : undefined}
          onClick={() => onChange(division as ScheduleType)}
        >
          {division === ScheduleType.ALL && "모든 일정"}
          {division === ScheduleType.TODAY && "오늘 일정"}
          {division === ScheduleType.EXPECT && "예정된 일정"}
          {division === ScheduleType.COMPLETE && "완료한 일정"}
        </li>
      ))}
    </ul>
  );
};

export default TabList;
