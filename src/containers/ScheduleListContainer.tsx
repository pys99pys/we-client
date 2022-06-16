import { FC } from "react";
import ScheduleList from "../components/schedule/ScheduleList";
import { Schedule } from "../models/client/Schedule";
import { useGetSchedulesQuery } from "../queries/getSchedules";

interface ScheduleListContainerProps {}

const ScheduleListContainer: FC<ScheduleListContainerProps> = () => {
  const { loading, data } = useGetSchedulesQuery();

  return <ScheduleList items={data?.getSchedules || []} />;
};

export default ScheduleListContainer;
