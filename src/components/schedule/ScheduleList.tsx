import { FC } from "react";

import { Schedule } from "../../models/server/Schedule";
import ScheduleItem from "./ScheduleItem";
import css from "./ScheduleList.module.css";

interface ScheduleListProps {
  items: Schedule[];
  onComplete: (id: number) => void;
}

const ScheduleList: FC<ScheduleListProps> = ({ items, onComplete }) => {
  return (
    <ul className={css.ScheduleList}>
      {items.map((item) => (
        <ScheduleItem
          key={item.id}
          title={item.title}
          tags={item.tags}
          userIds={item.userIds}
          completedAt={item.completedAt}
          dueAt={item.dueAt}
          onClickCheckbox={() => onComplete(item.id)}
        />
      ))}
    </ul>
  );
};

export default ScheduleList;
