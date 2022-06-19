import { FC, ReactNode } from "react";
import cx from "classnames";
import css from "./Icon.module.css";

interface IconProps {
  hoverable?: boolean;
  color?: "primary" | "lightGray";
  children: ReactNode;
}

const Icon: FC<IconProps> = ({ hoverable = false, color, children }) => {
  return (
    <span
      className={cx(css.Icon, {
        [css.hoverable]: hoverable === true,
        [css.primary]: color === "primary",
        [css.lightGray]: color === "lightGray",
      })}
    >
      {children}
    </span>
  );
};

export default Icon;
