import { FC } from "react";
import ScheduleList from "../components/schedule/ScheduleList";
import { Schedule } from "../models/client/Schedule";

interface ScheduleListContainerProps {}

const ScheduleListContainer: FC<ScheduleListContainerProps> = () => {
  const items: Schedule[] = [
    {
      id: 1,
      title: "범죄도시2 보러가기 (롯데시네마)",
      tags: ["영화", "데이트"],
      owners: [
        { id: 1, name: "박윤서" },
        { id: 2, name: "홍우정" },
      ],
      createdAt: "2022-06-01 12:30:00",
      completedAt: null,
      dueAt: "2022-06-30 12:00:00",
    },
    {
      id: 2,
      title: "엘데랑 저녁 약속",
      tags: ["약속"],
      owners: [{ id: 2, name: "홍우정" }],
      createdAt: "2022-06-05 00:00:00",
      completedAt: "2022-06-10 17:30:30",
      dueAt: "2022-06-10 12:30:00",
    },
  ];

  return <ScheduleList items={items} />;
};

export default ScheduleListContainer;
