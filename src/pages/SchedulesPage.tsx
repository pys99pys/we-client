import { FC } from "react";
import SchedulesPageTemplate from "../components/template/SchedulesPageTemplate";
import TabContainer from "../containers/tab/TabContainer";

interface SchedulesPageProps {}

const SchedulesPage: FC<SchedulesPageProps> = () => {
  return <SchedulesPageTemplate tabContainer={<TabContainer />} />;
};

export default SchedulesPage;
