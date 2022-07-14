import { FC, ReactNode, useLayoutEffect, useRef } from "react";
import css from "./Toast.module.css";

interface ToastProps {
  onClose: () => void;
  children: ReactNode;
}

const Toast: FC<ToastProps> = ({ onClose, children }) => {
  const ref = useRef<HTMLElement | null>(null);

  const handleClose = () => {
    if (ref.current) {
      ref.current.classList.remove(css.active);
    }

    setTimeout(() => {
      onClose();
    }, 300);
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.classList.add(css.active);
      }
    }, 50);

    setTimeout(() => {
      if (ref.current) {
        ref.current.classList.remove(css.active);
      }
    }, 50 + 5000);

    setTimeout(() => {
      onClose();
    }, 50 + 5000 + 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <figure ref={ref} className={css.toast} onClick={handleClose}>
      {children}
    </figure>
  );
};

export default Toast;
