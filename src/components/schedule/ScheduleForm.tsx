import { FC } from "react";
import { FaCheck } from "react-icons/fa";
import { Form as FormType } from "../../models/client/Form";
import Form from "../element/Form";
import Input from "../element/Input";
import Button from "../element/Button";
import Radio from "../element/Radio";

interface ScheduleFormProps {
  form: FormType;
  errors: Record<keyof FormType, boolean>;
  onChange: (key: keyof FormType, value: FormType[keyof FormType]) => void;
  onSubmit: () => void;
}

const ScheduleForm: FC<ScheduleFormProps> = ({
  form,
  errors,
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
        <Radio.Group>
          <Radio
            checked={form.userIds.length === 2}
            onClick={() => onChange("userIds", [1, 2])}
          >
            함께
          </Radio>
          <Radio
            checked={form.userIds.length === 1 && form.userIds[0] === 1}
            onClick={() => onChange("userIds", [1])}
          >
            윤서
          </Radio>
          <Radio
            checked={form.userIds.length === 1 && form.userIds[0] === 2}
            onClick={() => onChange("userIds", [2])}
          >
            우정
          </Radio>
        </Radio.Group>
      </Form.Row>
      <Form.ButtonArea>
        <Button
          size="large"
          icon={<FaCheck />}
          color="primary"
          onClick={onSubmit}
        >
          일정 수정
        </Button>
      </Form.ButtonArea>
    </Form>
  );
};

export default ScheduleForm;
