import React, { FC, FormEvent, ReactNode } from "react";
import css from "./Form.module.css";

const ButtonArea: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={css.buttonArea}>
      <dd>{children}</dd>
    </div>
  );
};

const Row: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <dl className={css.row}>
      <dt>{title}</dt>
      <dd>{children}</dd>
    </dl>
  );
};

interface FormProps {
  onSubmit?: () => void;
  children: ReactNode;
}

const Form: FC<FormProps> & {
  ButtonArea: typeof ButtonArea;
  Row: typeof Row;
} = ({ onSubmit, children }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form className={css.Form} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.ButtonArea = ButtonArea;
Form.Row = Row;

export default Form;
