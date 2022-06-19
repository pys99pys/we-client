import { FC } from "react";
import css from "./Input.module.css";

interface InputProps {
  type?: "text" | "date";
  placeholder?: string;
}

const Input: FC<InputProps> = ({ type = "text", placeholder }) => {
  return <input type={type} className={css.Input} placeholder={placeholder} />;
};

export default Input;
