import { FC, ReactNode } from "react";
import Button from "../element/Button";
import css from "./SchedulesPageTemplate.module.css";
import { FaPlus } from "react-icons/fa";

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
      <div className={css.containerWrap}>
        <Button icon={<FaPlus />} color="primary">
          새 일정
        </Button>
        <div className={css.scheduleListWrap}>{scheduleListContainer}</div>
      </div>
    </>
  );
};

export default SchedulesPageTemplate;
