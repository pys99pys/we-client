import { FC } from "react";
import cx from "classnames";
import css from "./Input.module.css";

interface InputProps {
  type?: "text" | "date";
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder,
  isError = false,
  errorMessage,
  value,
  onChange,
}) => {
  return (
    <div
      className={cx(css.Input, {
        [css.error]: isError,
      })}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {isError && errorMessage && (
        <p className={css.errorMessage}>{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
