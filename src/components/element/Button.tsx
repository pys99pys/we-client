import { FC, ReactNode } from "react";
import cx from "classnames";
import css from "./Button.module.css";
import Icon from "./Icon";

interface ButtonProps {
  icon?: ReactNode;
  color?: "primary";
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ icon, color, children }) => {
  return (
    <button
      type="button"
      className={cx(css.Button, {
        [css.primary]: color === "primary",
      })}
    >
      {icon && <span className={css.iconWrap}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
