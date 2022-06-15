import { FC } from "react";
import { useRecoilState } from "recoil";
import { selectedTabState } from "../stores/tabStore";
import { TabDivision } from "../models/client/Tab";
import TabList from "../components/tab/TabList";

interface TabContainerProps {}

const TabContainer: FC<TabContainerProps> = () => {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedTabState);

  const handleChange = (selectedTab: TabDivision) => {
    setSelectedTab(selectedTab);
  };

  return <TabList selectedTab={selectedTab} onChange={handleChange} />;
};

export default TabContainer;
