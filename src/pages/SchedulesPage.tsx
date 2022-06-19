import { FC } from "react";
import SchedulesPageTemplate from "../components/template/SchedulesPageTemplate";
import ScheduleListContainer from "../containers/ScheduleListContainer";
import TabContainer from "../containers/TabContainer";

interface SchedulesPageProps {}

const SchedulesPage: FC<SchedulesPageProps> = () => {
  return (
    <SchedulesPageTemplate
      tabArea={<TabContainer />}
      scheduleListArea={<ScheduleListContainer />}
    />
  );
};

export default SchedulesPage;
