import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useGetScheduleQuery } from "../queries/getSchedule";
import { useGetSchedulesQuery } from "../queries/getSchedules";
import { useUpdateScheduleMutation } from "../queries/updateSchedule";
import { useRemoveScheduleMutation } from "../queries/removeSchedule";
import { selectedTabState } from "../stores/tabStore";
import { Form } from "../models/client/Form";
import ScheduleForm from "../components/schedule/ScheduleUpdateForm";

interface ScheduleUpdateContainerProps {}

const ScheduleUpdateContainer: FC<ScheduleUpdateContainerProps> = () => {
  const navagate = useNavigate();
  const tab = useRecoilValue(selectedTabState);
  const { id } = useParams<{ id: string }>();
  const { data } = useGetScheduleQuery(id || "");
  const { refetch } = useGetSchedulesQuery(tab);
  const [fetchUpdate, { loading: updateLoading }] = useUpdateScheduleMutation();
  const [fetchRemove, { loading: removeLoading }] = useRemoveScheduleMutation();

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
    setForm({ ...form, [key]: value });
  };

  const handleRemove = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await fetchRemove({ variables: { id: id || "" } });
      await refetch();

      window.alert("일정이 삭제되었습니다.");
      navagate("/");
    }
  };

  const handleSubmit = async () => {
    setErrors({
      ...errors,
      title: !form.title,
    });

    if (form.title) {
      await fetchUpdate({
        variables: {
          id: id || "",
          title: form.title,
          content: "",
          dueAt: form.dueAt || null,
          tags: form.tags.split(","),
          userIds: form.userIds,
        },
      });

      alert("일정이 수정되었습니다.");
    }
  };

  useEffect(() => {
    if (data?.getSchedule) {
      setForm({
        dueAt: data.getSchedule.dueAt || "",
        title: data.getSchedule.title,
        tags: data.getSchedule.tags.join(","),
        userIds: data.getSchedule.userIds,
      });
    }
  }, [data]);

  return data ? (
    <ScheduleForm
      form={form}
      errors={errors}
      updateLoading={updateLoading}
      removeLoading={removeLoading}
      onChange={handleChange}
      onRemove={handleRemove}
      onSubmit={handleSubmit}
    />
  ) : null;
};

export default ScheduleUpdateContainer;
