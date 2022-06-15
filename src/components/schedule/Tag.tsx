import { FC, ReactNode } from "react";
import css from "./Tag.module.css";

interface TagProps {
  children: ReactNode;
}

const Tag: FC<TagProps> = ({ children }) => {
  return <span className={css.Tag}>#{children}</span>;
};

export default Tag;
