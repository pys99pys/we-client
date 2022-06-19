import { FC } from "react";

import { Schedule } from "../../models/server/Schedule";
import ScheduleItem from "./ScheduleItem";
import css from "./ScheduleList.module.css";

interface ScheduleListProps {
  items: Schedule[];
  onClickCheckbox: (id: number) => void;
  onClickItem: (id: number) => void;
}

const ScheduleList: FC<ScheduleListProps> = ({
  items,
  onClickCheckbox,
  onClickItem,
}) => {
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
          onClickCheckbox={() => onClickCheckbox(item.id)}
          onClickItem={() => onClickItem(item.id)}
        />
      ))}
    </ul>
  );
};

export default ScheduleList;
