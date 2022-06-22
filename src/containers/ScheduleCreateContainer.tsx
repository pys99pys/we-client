import { FC, useState } from "react";
import { useCreateScheduleMutation } from "../queries/createSchedule";
import { Form } from "../models/client/Form";
import ScheduleCreateForm from "../components/schedule/ScheduleCreateForm";

interface ScheduleUpdateContainerProps {}

const ScheduleUpdateContainer: FC<ScheduleUpdateContainerProps> = () => {
  const [fetchCreate] = useCreateScheduleMutation();

  const [form, setForm] = useState<Form>({
    dueAt: new Date().toISOString().substring(0, 10),
    title: "",
    tags: "",
    userIds: [1, 2],
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
      fetchCreate({
        variables: {
          title: form.title,
          content: "",
          dueAt: form.dueAt || null,
          tags: form.tags.split(", "),
          userIds: form.userIds,
        },
      });
    }
  };

  return (
    <ScheduleCreateForm
      form={form}
      errors={errors}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ScheduleUpdateContainer;
