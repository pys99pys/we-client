import { FC } from "react";

import { Schedule } from "../../models/server/Schedule";
import ScheduleItem from "./ScheduleItem";
import css from "./ScheduleList.module.css";

interface ScheduleListProps {
  items: Schedule[];
  onClickCheckbox: (id: string) => void;
  onClickItem: (id: string) => void;
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
          key={item._id}
          title={item.title}
          tags={item.tags}
          userIds={item.userIds}
          completedAt={item.completedAt}
          dueAt={item.dueAt}
          onClickCheckbox={() => onClickCheckbox(item._id)}
          onClickItem={() => onClickItem(item._id)}
        />
      ))}
    </ul>
  );
};

export default ScheduleList;
