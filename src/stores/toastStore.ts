import { useEffect, useRef } from "react";
import { atom, useRecoilState } from "recoil";
import { ToastItem } from "../models/client/Toast";

export const toastState = atom<ToastItem[]>({
  key: "toastState",
  default: [],
});

export const useToast = () => {
  const stateRef = useRef<ToastItem[]>([]);
  const [state, setState] = useRecoilState(toastState);

  const onOpenToast = (message: string) => {
    setState([{ id: +new Date(), message }]);
  };

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  return onOpenToast;
};
