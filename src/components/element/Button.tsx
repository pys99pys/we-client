import { FC, ReactNode } from "react";
import cx from "classnames";
import css from "./Button.module.css";

interface ButtonProps {
  size?: "large" | "small";
  icon?: ReactNode;
  loading?: boolean;
  color?: "primary" | "red";
  onClick?: () => void;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  size,
  icon,
  color,
  loading,
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className={cx(css.button, {
        [css.loading]: !!loading,
        [css.large]: size === "large",
        [css.small]: size === "small",
        [css.primary]: color === "primary",
        [css.red]: color === "red",
      })}
      onClick={loading ? undefined : onClick}
    >
      {icon && <span className={css.iconWrap}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
