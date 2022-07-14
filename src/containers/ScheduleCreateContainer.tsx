import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateScheduleMutation } from "../queries/createSchedule";
import { getToday } from "../utils/date";
import { Form } from "../models/client/Form";
import useFetchSchedulesWithTab from "../hooks/useFetchSchedulesWithTab";
import ScheduleCreateForm from "../components/schedule/ScheduleCreateForm";

const ScheduleUpdateContainer: FC = () => {
  const navigate = useNavigate();
  const { refetch } = useFetchSchedulesWithTab();
  const [fetchCreate, { loading: createLoading }] = useCreateScheduleMutation();

  const [form, setForm] = useState<Form>({
    dueAt: getToday(),
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

  const handleSubmit = async () => {
    setErrors({
      ...errors,
      title: !form.title,
    });

    if (form.title) {
      await fetchCreate({
        variables: {
          title: form.title,
          content: "",
          dueAt: form.dueAt || null,
          tags: form.tags ? form.tags.split(",") : [],
          userIds: form.userIds,
        },
      });

      await refetch();
      window.alert("일정이 추가되었습니다.");
      navigate("/");
    }
  };

  return (
    <ScheduleCreateForm
      form={form}
      errors={errors}
      createLoading={createLoading}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ScheduleUpdateContainer;
