import { FC } from "react";
import { useNavigate } from "react-router-dom";
import ScheduleList from "../components/schedule/ScheduleList";
import { useGetSchedulesQuery } from "../queries/getSchedules";
import { useToggleScheduleMutation } from "../queries/toggleSchedule";

interface ScheduleListContainerProps {}

const ScheduleListContainer: FC<ScheduleListContainerProps> = () => {
  const navigate = useNavigate();
  const { data } = useGetSchedulesQuery();

  const [toggleScheduleMutate] = useToggleScheduleMutation();

  const handleComplete = (id: number) => {
    toggleScheduleMutate({ variables: { id } });
  };

  const handleDetailPage = (id: number) => {
    navigate(`update/${id}`);
  };

  return (
    <ScheduleList
      items={data?.getSchedules || []}
      onClickCheckbox={handleComplete}
      onClickItem={handleDetailPage}
    />
  );
};

export default ScheduleListContainer;
