import { useRecoilValue } from "recoil";
import { useGetSchedulesQuery } from "../queries/getSchedules";
import { selectedTabState } from "../stores/tabStore";

const useFetchSchedulesWithTab = () => {
  const tab = useRecoilValue(selectedTabState);

  return useGetSchedulesQuery(tab);
};

export default useFetchSchedulesWithTab;
