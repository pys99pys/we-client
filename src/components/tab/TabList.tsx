import { FC } from "react";
import { TabDivision } from "../../models/client/Tab";
import css from "./TabList.module.css";

interface TabListProps {
  selectedTab: TabDivision;
  onChange: (selectedTab: TabDivision) => void;
}

const TabList: FC<TabListProps> = ({ selectedTab, onChange }) => {
  return (
    <ul className={css.TabList}>
      {Object.keys(TabDivision).map((division) => (
        <li
          key={division}
          className={division === selectedTab ? css.active : undefined}
          onClick={() => onChange(division as TabDivision)}
        >
          {division === TabDivision.ALL && "모든 일정"}
          {division === TabDivision.TODAY && "오늘 일정"}
          {division === TabDivision.EXPECT && "예정된 일정"}
          {division === TabDivision.COMPLETE && "완료한 일정"}
        </li>
      ))}
    </ul>
  );
};

export default TabList;
