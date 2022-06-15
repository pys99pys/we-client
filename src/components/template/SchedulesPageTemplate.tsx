import { FC, ReactNode } from "react";

interface SchedulesPageTemplateProps {
  tabContainer: ReactNode;
}

const SchedulesPageTemplate: FC<SchedulesPageTemplateProps> = ({
  tabContainer,
}) => {
  return <div>{tabContainer}</div>;
};

export default SchedulesPageTemplate;
