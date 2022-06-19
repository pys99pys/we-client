import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetScheduleQuery } from "../queries/getSchedule";
import { Form } from "../models/client/Form";
import ScheduleForm from "../components/schedule/ScheduleForm";

interface ScheduleUpdateContainerProps {}

const ScheduleUpdateContainer: FC<ScheduleUpdateContainerProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetScheduleQuery(Number(id));
  const [form, setForm] = useState<Form | null>(null);

  const handleChange = (key: keyof Form, value: Form[keyof Form]) => {
    if (form !== null) {
      setForm({ ...form, [key]: value });
    }
  };

  useEffect(() => {
    if (data?.getSchedule) {
      setForm({
        dueAt: data.getSchedule.dueAt || "",
        title: data.getSchedule.title,
        tags: data.getSchedule.tags.join(", "),
        userIds: data.getSchedule.userIds,
      });
    }
  }, [data]);

  return form && <ScheduleForm form={form} onChange={handleChange} />;
};

export default ScheduleUpdateContainer;
