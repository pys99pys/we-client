import { FC } from "react";
import css from "./Input.module.css";

interface InputProps {
  type?: "text" | "date";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={css.Input}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};

export default Input;
