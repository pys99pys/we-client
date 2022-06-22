import { FC, ReactNode } from "react";
import Button from "../element/Button";
import css from "./SchedulesPageTemplate.module.css";
import { FaPlus } from "react-icons/fa";

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
        <Button icon={<FaPlus />} color="primary" onClick={onClickCreateButton}>
          새 일정
        </Button>
        <div className={css.scheduleListWrap}>{scheduleListArea}</div>
      </div>
    </>
  );
};

export default SchedulesPageTemplate;
