import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "../stores/toastStore";
import { useConfirm } from "../stores/popupStore";
import { useGetScheduleQuery } from "../queries/getSchedule";
import { useUpdateScheduleMutation } from "../queries/updateSchedule";
import { useRemoveScheduleMutation } from "../queries/removeSchedule";
import { Form } from "../models/client/Form";
import ScheduleForm from "../components/schedule/ScheduleUpdateForm";
import useFetchSchedulesWithTab from "../hooks/useFetchSchedulesWithTab";

interface ScheduleUpdateContainerProps {}

const ScheduleUpdateContainer: FC<ScheduleUpdateContainerProps> = () => {
  const navagate = useNavigate();
  const toast = useToast();
  const confirm = useConfirm();
  const { id } = useParams<{ id: string }>();
  const { data } = useGetScheduleQuery(id || "");
  const { refetch } = useFetchSchedulesWithTab();
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
    confirm("정말 삭제하시겠습니까?", {
      onConfirm: async () => {
        await fetchRemove({ variables: { id: id || "" } });
        await refetch();

        toast("일정이 삭제되었습니다.");
        navagate("/");
      },
    });
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

      toast("일정이 수정되었습니다.");
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
