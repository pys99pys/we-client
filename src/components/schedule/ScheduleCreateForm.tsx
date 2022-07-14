import { FC } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { Form as FormType } from "../../models/client/Form";
import Form from "../element/Form";
import Input from "../element/Input";
import Button from "../element/Button";
import Checkbox from "../element/Checkbox";

interface ScheduleCreateFormProps {
  form: FormType;
  errors: Record<keyof FormType, boolean>;
  createLoading: boolean;
  onChange: (key: keyof FormType, value: FormType[keyof FormType]) => void;
  onSubmit: () => void;
}

const ScheduleCreateForm: FC<ScheduleCreateFormProps> = ({
  form,
  errors,
  createLoading,
  onChange,
  onSubmit,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Row title="일정 제목">
        <Input
          placeholder="일정의 제목을 입력해주세요."
          isError={errors.title}
          errorMessage="일정 제목은 반드시 입력되어야 합니다."
          value={form.title}
          onChange={(value) => onChange("title", value)}
        />
      </Form.Row>
      <Form.Row title="태그">
        <Input
          placeholder=", 로 구분해주세요."
          value={form.tags}
          onChange={(value) => onChange("tags", value)}
        />
      </Form.Row>
      <Form.Row title="일정 날짜">
        <Input
          type="date"
          value={form.dueAt}
          onChange={(value) => onChange("dueAt", value)}
        />
      </Form.Row>
      <Form.Row title="소유자">
        <Checkbox.Group>
          {[1, 2].map((userId) => (
            <Checkbox
              key={userId}
              checked={form.userIds.includes(userId)}
              onClick={() =>
                onChange(
                  "userIds",
                  form.userIds.includes(userId)
                    ? form.userIds.filter((id) => id !== userId)
                    : form.userIds.concat(userId)
                )
              }
            >
              {userId === 1 && "윤서"}
              {userId === 2 && "우정"}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </Form.Row>
      <Form.ButtonArea>
        <Button
          size="large"
          icon={<FaCalendarPlus />}
          loading={createLoading}
          color="primary"
          onClick={onSubmit}
        >
          {createLoading && "추가중..."}
          {!createLoading && "일정 추가"}
        </Button>
      </Form.ButtonArea>
    </Form>
  );
};

export default ScheduleCreateForm;
