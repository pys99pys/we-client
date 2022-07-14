import { FC } from "react";
import { FaCalendarCheck, FaTrash } from "react-icons/fa";
import { Form as FormType } from "../../models/client/Form";
import Form from "../element/Form";
import Input from "../element/Input";
import Button from "../element/Button";
import Checkbox from "../element/Checkbox";

interface ScheduleUpdateFormProps {
  form: FormType;
  errors: Record<keyof FormType, boolean>;
  updateLoading: boolean;
  removeLoading: boolean;
  onChange: (key: keyof FormType, value: FormType[keyof FormType]) => void;
  onSubmit: () => void;
  onRemove: () => void;
}

const ScheduleUpdateForm: FC<ScheduleUpdateFormProps> = ({
  form,
  errors,
  updateLoading,
  removeLoading,
  onChange,
  onSubmit,
  onRemove,
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
          icon={<FaCalendarCheck />}
          loading={updateLoading}
          color="primary"
          onClick={onSubmit}
        >
          {updateLoading && "수정중..."}
          {!updateLoading && "일정 수정"}
        </Button>
        <Button
          size="large"
          icon={<FaTrash />}
          loading={removeLoading}
          color="red"
          onClick={onRemove}
        >
          {removeLoading && "삭제중..."}
          {!removeLoading && "일정 삭제"}
        </Button>
      </Form.ButtonArea>
    </Form>
  );
};

export default ScheduleUpdateForm;
