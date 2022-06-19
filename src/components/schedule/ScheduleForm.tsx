import { FC } from "react";
import Form from "../element/Form";
import Input from "../element/Input";
import Button from "../element/Button";
import Radio from "../element/Radio";

interface ScheduleFormProps {}

const ScheduleForm: FC<ScheduleFormProps> = () => {
  return (
    <Form>
      <Form.Row title="일정 제목">
        <Input placeholder="일정의 제목을 입력해주세요." />
      </Form.Row>
      <Form.Row title="태그">
        <Input placeholder=", 로 구분해주세요." />
      </Form.Row>
      <Form.Row title="일정 날짜">
        <Input type="date" />
      </Form.Row>
      <Form.Row title="소유자">
        <Radio.Group>
          <Radio checked>함께</Radio>
          <Radio checked={false}>윤서</Radio>
          <Radio checked={false}>우정</Radio>
        </Radio.Group>
      </Form.Row>
      <Form.ButtonArea>
        <Button size="large" color="primary">
          일정 수정
        </Button>
      </Form.ButtonArea>
    </Form>
  );
};

export default ScheduleForm;
