import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ScheduleList from "../components/schedule/ScheduleList";
import { useGetSchedulesQuery } from "../queries/getSchedules";
import { useToggleScheduleMutation } from "../queries/toggleSchedule";
import { selectedTabState } from "../stores/tabStore";

interface ScheduleListContainerProps {}

const ScheduleListContainer: FC<ScheduleListContainerProps> = () => {
  const navigate = useNavigate();
  const tab = useRecoilValue(selectedTabState);

  const { data } = useGetSchedulesQuery(tab);
  const [toggleSchedule] = useToggleScheduleMutation();

  const handleComplete = (id: string) => {
    toggleSchedule({ variables: { id } });
  };

  const handleDetailPage = (id: string) => {
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
