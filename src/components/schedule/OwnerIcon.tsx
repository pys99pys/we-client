import { FC } from "react";
import css from "./OwnerIcon.module.css";

interface OwnerIconProps {
  userId: number | null;
}

const getUserName = (userId: number) => {
  switch (userId) {
    case 1:
      return "윤서";
    case 2:
      return "우정";
    default:
      return "";
  }
};

const OwnerIcon: FC<OwnerIconProps> = ({ userId }) => {
  return (
    <span
      data-id={userId === null ? undefined : userId}
      className={css.OwnerIcon}
    >
      {userId === null && "함께"}
      {userId !== null && getUserName(userId)}
    </span>
  );
};

export default OwnerIcon;
