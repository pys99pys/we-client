import { FC, ReactNode } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import Button from "../element/Button";
import css from "./SchedulesPageTemplate.module.css";

interface SchedulesPageTemplateProps {
  tabArea: ReactNode;
  scheduleListArea: ReactNode;
  onClickCreateButton: () => void;
}

const SchedulesPageTemplate: FC<SchedulesPageTemplateProps> = ({
  tabArea,
  scheduleListArea,
  onClickCreateButton,
}) => {
  return (
    <>
      {tabArea}
      <div className={css.containerWrap}>
        <Button
          icon={<FaCalendarPlus />}
          color="primary"
          onClick={onClickCreateButton}
        >
          새 일정
        </Button>
        <div className={css.scheduleListWrap}>{scheduleListArea}</div>
      </div>
    </>
  );
};

export default SchedulesPageTemplate;
