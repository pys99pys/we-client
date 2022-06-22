import { FC } from "react";
import FormPageLayout from "../components/layout/FormPageLayout";
import ScheduleCreateContainer from "../containers/ScheduleCreateContainer";

interface ScheduleCreatePageProps {}

const ScheduleCreatePage: FC<ScheduleCreatePageProps> = () => {
  return (
    <FormPageLayout title="일정 추가">
      <ScheduleCreateContainer />
    </FormPageLayout>
  );
};

export default ScheduleCreatePage;
