import { FC, ReactNode } from "react";
import css from "./FormPageLayout.module.css";

interface FormPageLayoutProps {
  title: string;
  children: ReactNode;
}

const FormPageLayout: FC<FormPageLayoutProps> = ({ title, children }) => {
  return (
    <div className={css.FormPageLayout}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default FormPageLayout;
