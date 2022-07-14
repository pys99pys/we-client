import { FC, ReactNode } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import cx from "classnames";
import css from "./Checkbox.module.css";

const Group: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={css.group}>{children}</div>;
};

interface CheckboxProps {
  checked: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Checkbox: FC<CheckboxProps> & {
  Group: typeof Group;
} = ({ checked, onClick, children }) => {
  return (
    <button
      type="button"
      className={cx(css.checkbox, {
        [css.checked]: checked,
      })}
      onClick={onClick}
    >
      <span className={css.icon}>
        <ImCheckboxChecked />
      </span>
      {children}
    </button>
  );
};

Checkbox.Group = Group;

export default Checkbox;
