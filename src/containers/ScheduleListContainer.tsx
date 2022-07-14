import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useToggleScheduleMutation } from "../queries/toggleSchedule";
import { selectedTabState } from "../stores/tabStore";
import useFetchSchedulesWithTab from "../hooks/useFetchSchedulesWithTab";
import ScheduleList from "../components/schedule/ScheduleList";

interface ScheduleListContainerProps {}

const ScheduleListContainer: FC<ScheduleListContainerProps> = () => {
  const navigate = useNavigate();
  const tab = useRecoilValue(selectedTabState);

  const { data, refetch } = useFetchSchedulesWithTab();
  const [toggleSchedule] = useToggleScheduleMutation();

  const handleComplete = async (id: string) => {
    await toggleSchedule({ variables: { id } });
    refetch();
  };

  const handleDetailPage = (id: string) => {
    navigate(`update/${id}`);
  };

  useEffect(() => {
    refetch();
  }, [tab, refetch]);

  return (
    <ScheduleList
      items={data?.getSchedules || []}
      onClickCheckbox={handleComplete}
      onClickItem={handleDetailPage}
    />
  );
};

export default ScheduleListContainer;
