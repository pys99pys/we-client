import { FC, ReactNode } from "react";
import cx from "classnames";
import css from "./Button.module.css";

interface ButtonProps {
  size?: "large" | "small";
  icon?: ReactNode;
  color?: "primary";
  onClick?: () => void;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ size, icon, color, onClick, children }) => {
  return (
    <button
      type="button"
      className={cx(css.Button, {
        [css.large]: size === "large",
        [css.small]: size === "small",
        [css.primary]: color === "primary",
      })}
      onClick={onClick}
    >
      {icon && <span className={css.iconWrap}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
