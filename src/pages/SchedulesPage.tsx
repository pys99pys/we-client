import { FC } from "react";
import { useNavigate } from "react-router-dom";
import SchedulesPageTemplate from "../components/template/SchedulesPageTemplate";
import ScheduleListContainer from "../containers/ScheduleListContainer";
import TabContainer from "../containers/TabContainer";

interface SchedulesPageProps {}

const SchedulesPage: FC<SchedulesPageProps> = () => {
  const navigate = useNavigate();

  const handleLinkCreatePage = () => {
    navigate("/create");
  };

  return (
    <SchedulesPageTemplate
      tabArea={<TabContainer />}
      scheduleListArea={<ScheduleListContainer />}
      onClickCreateButton={handleLinkCreatePage}
    />
  );
};

export default SchedulesPage;
