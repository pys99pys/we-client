import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetScheduleQuery } from "../queries/getSchedule";
import { Form } from "../models/client/Form";
import ScheduleForm from "../components/schedule/ScheduleForm";
import { useUpdateScheduleMutation } from "../queries/updateSchedule";

interface ScheduleUpdateContainerProps {}

const ScheduleUpdateContainer: FC<ScheduleUpdateContainerProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetScheduleQuery(Number(id));
  const [fetchUpdate] = useUpdateScheduleMutation();

  const [form, setForm] = useState<Form>({
    dueAt: "",
    title: "",
    tags: "",
    userIds: [],
  });

  const [errors, setErrors] = useState<Record<keyof Form, boolean>>({
    dueAt: false,
    title: false,
    tags: false,
    userIds: false,
  });

  const handleChange = (key: keyof Form, value: Form[keyof Form]) => {
    if (form !== null) {
      setForm({ ...form, [key]: value });
    }
  };

  const handleSubmit = () => {
    setErrors({
      ...errors,
      title: !form.title,
    });

    if (form.title) {
      fetchUpdate({
        variables: {
          id: Number(id),
          title: form.title,
          content: "",
          dueAt: form.dueAt,
          tags: form.tags.split(", "),
          userIds: form.userIds,
        },
      });
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

  return data ? (
    <ScheduleForm
      form={form}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  ) : null;
};

export default ScheduleUpdateContainer;
