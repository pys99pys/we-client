import { FC } from "react";
import { Owner } from "../../models/client/Owner";
import css from "./OwnerIcon.module.css";

interface OwnerIconProps {
  owners: Owner[];
}

const OwnerIcon: FC<OwnerIconProps> = ({ owners }) => {
  return (
    <span
      data-id={owners.length === 1 && owners[0].id % 5}
      className={css.OwnerIcon}
    >
      {owners.length === 2 && "함께"}
      {owners.length === 1 && owners[0].name}
    </span>
  );
};

export default OwnerIcon;
