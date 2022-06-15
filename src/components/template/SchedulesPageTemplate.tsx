import { FC, ReactNode } from "react";
import css from "./SchedulesPageTemplate.module.css";

interface SchedulesPageTemplateProps {
  tabContainer: ReactNode;
  scheduleListContainer: ReactNode;
}

const SchedulesPageTemplate: FC<SchedulesPageTemplateProps> = ({
  tabContainer,
  scheduleListContainer,
}) => {
  return (
    <>
      {tabContainer}
      <div className={css.scheduleList}>{scheduleListContainer}</div>
    </>
  );
};

export default SchedulesPageTemplate;
