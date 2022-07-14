import { FC, useMemo } from "react";
import { useRecoilState } from "recoil";
import { toastState, useToast } from "../../stores/toastStore";
import Toast from "../popup/Toast";
import css from "./ToastProvider.module.css";

interface ToastProviderProps {}

const ToastProvider: FC<ToastProviderProps> = () => {
  const [toast, setToast] = useRecoilState(toastState);

  const toastItem = useMemo(() => toast[0], [toast]);

  if (!toastItem) {
    return null;
  }

  return (
    <div className={css.toastProvider}>
      <Toast onClose={() => setToast([])}>{toastItem.message}</Toast>
    </div>
  );
};

export default ToastProvider;
