import { FC, ReactNode } from "react";
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
  children: ReactNode;
}

const Form: FC<FormProps> & {
  ButtonArea: typeof ButtonArea;
  Row: typeof Row;
} = ({ children }) => {
  return <form className={css.Form}>{children}</form>;
};

Form.ButtonArea = ButtonArea;
Form.Row = Row;

export default Form;
