import React, { FC } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
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
  onClickItem: () => void;
}

const ScheduleItem: FC<ScheduleItemProps> = ({
  title,
  tags,
  userIds,
  completedAt,
  dueAt,
  onClickCheckbox,
  onClickItem,
}) => {
  const handleClickCheckbox = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClickCheckbox();
  };

  return (
    <li className={css.ScheduleItem} onClick={onClickItem}>
      <div className={css.checkboxWrap} onClick={handleClickCheckbox}>
        <div className={css.checkboxIcon}>
          <Icon hoverable color={!!completedAt ? "primary" : "lightGray"}>
            <BsFillCheckCircleFill />
          </Icon>
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
        {!!tags.length && (
          <div className={css.tagWrap}>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
      <div className={css.ownerWrap}>
        <OwnerIcon userId={userIds.length === 1 ? userIds[0] : null} />
      </div>
    </li>
  );
};

export default ScheduleItem;
