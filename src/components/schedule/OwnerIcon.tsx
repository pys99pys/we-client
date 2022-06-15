import { FC } from "react";
import { Owner } from "../../models/client/Owner";
import css from "./OwnerIcon.module.css";

interface OwnerIconProps {
  together: boolean;
  owner?: Owner;
}

const OwnerIcon: FC<OwnerIconProps> = ({ together, owner }) => {
  return (
    <span data-id={together ? undefined : owner?.id} className={css.OwnerIcon}>
      {together && "함께"}
      {!together && (owner?.name || "")}
    </span>
  );
};

export default OwnerIcon;
