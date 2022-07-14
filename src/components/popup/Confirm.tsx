import { FC, ReactNode } from "react";
import css from "./Confirm.module.css";

interface ConfirmProps {
  onCancel: () => void;
  onConfirm: () => void;
  children: ReactNode;
}

const Confirm: FC<ConfirmProps> = ({ onCancel, onConfirm, children }) => {
  return (
    <div className={css.confirm}>
      <div className={css.messageWrap}>{children}</div>
      <div className={css.buttonWrap}>
        <button type="button" onClick={onCancel}>
          취소
        </button>
        <button type="button" onClick={onConfirm}>
          확인
        </button>
      </div>
    </div>
  );
};

export default Confirm;
