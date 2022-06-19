import { FC } from "react";
import cx from "classnames";
import { Schedule } from "../../models/server/Schedule";
import OwnerIcon from "./OwnerIcon";
import css from "./ScheduleItem.module.css";
import Tag from "./Tag";
import Icon from "../element/Icon";

interface ScheduleItemProps {
  title: Schedule["title"];
  tags: Schedule["tags"];
  userIds: Schedule["userIds"];
  completedAt: Schedule["completedAt"];
  dueAt: Schedule["dueAt"];
  onClickCheckbox: () => void;
}

const ScheduleItem: FC<ScheduleItemProps> = ({
  title,
  tags,
  userIds,
  completedAt,
  dueAt,
  onClickCheckbox,
}) => {
  return (
    <li className={css.ScheduleItem}>
      <div className={css.checkboxWrap} onClick={onClickCheckbox}>
        <div className={css.checkboxIcon}>
          <Icon
            hoverable
            color={!!completedAt ? "primary" : "lightGray"}
            path="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z"
          />
        </div>
      </div>
      <div className={css.contentWrap}>
        <h6>{title}</h6>
        {
          <div className={css.dateWrap}>
            {
              <span
                className={cx(css.dueAt, {
                  [css.isCompleted]: !!completedAt,
                })}
              >
                {dueAt ? `${dueAt.substring(0, 16)} 일정` : "일정 미정"}
              </span>
            }

            {!!completedAt && (
              <span className={cx(css.completedAt)}>{" / 완료"}</span>
            )}
          </div>
        }
        <div className={css.tagWrap}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
      <div className={css.ownerWrap}>
        <OwnerIcon userId={userIds.length === 1 ? userIds[0] : null} />
      </div>
    </li>
  );
};

export default ScheduleItem;
