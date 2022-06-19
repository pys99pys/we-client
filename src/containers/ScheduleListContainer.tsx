import { FC } from "react";
import ScheduleList from "../components/schedule/ScheduleList";
import { useGetSchedulesQuery } from "../queries/getSchedules";
import { useToggleScheduleMutation } from "../queries/toggleSchedule";

interface ScheduleListContainerProps {}

const ScheduleListContainer: FC<ScheduleListContainerProps> = () => {
  const { loading, data } = useGetSchedulesQuery();
  const [toggleScheduleMutate] = useToggleScheduleMutation();

  const handleComplete = (id: number) => {
    toggleScheduleMutate({ variables: { id } });
  };

  return (
    <ScheduleList
      items={data?.getSchedules || []}
      onComplete={handleComplete}
    />
  );
};

export default ScheduleListContainer;
