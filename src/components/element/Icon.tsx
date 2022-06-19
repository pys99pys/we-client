import { FC } from "react";
import cx from "classnames";
import css from "./Icon.module.css";

interface IconProps {
  hoverable?: boolean;
  color?: "primary" | "lightGray";
  path: string;
}

const Icon: FC<IconProps> = ({ hoverable = false, color, path }) => {
  return (
    <svg
      className={cx(css.Icon, {
        [css.hoverable]: hoverable === true,
        [css.primary]: color === "primary",
        [css.lightGray]: color === "lightGray",
      })}
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
