import { FC } from "react";
import FormPageLayout from "../components/layout/FormPageLayout";
import ScheduleUpdateContainer from "../containers/ScheduleUpdateContainer";

interface ScheduleUpdatePageProps {}

const ScheduleUpdatePage: FC<ScheduleUpdatePageProps> = () => {
  return (
    <FormPageLayout title="일정 수정">
      <ScheduleUpdateContainer />
    </FormPageLayout>
  );
};

export default ScheduleUpdatePage;
