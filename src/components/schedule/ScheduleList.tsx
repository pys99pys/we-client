import { FC } from "react";
import { Schedule } from "../../models/client/Schedule";
import ScheduleItem from "./ScheduleItem";
import css from "./ScheduleList.module.css";

interface ScheduleListProps {
  items: Schedule[];
}

const ScheduleList: FC<ScheduleListProps> = ({ items }) => {
  return (
    <ul className={css.ScheduleList}>
      {items.map((item) => (
        <ScheduleItem
          key={item.id}
          title={item.title}
          tags={item.tags}
          owners={item.owners}
          completedAt={item.completedAt}
          dueAt={item.dueAt}
        />
      ))}
    </ul>
  );
};

export default ScheduleList;
