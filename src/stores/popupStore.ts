import { atom, useSetRecoilState } from "recoil";
import { PopupItem, PopupType } from "../models/client/Popup";

export const popupState = atom<PopupItem[]>({
  key: "popupState",
  default: [],
});

export const useAlert = () => {
  const setState = useSetRecoilState(popupState);

  const openAlert = (
    message: string,
    options?: {
      onClick: () => void;
    }
  ) => {
    setState([
      {
        type: PopupType.ALERT,
        message,
        onClick: options?.onClick,
      },
    ]);
  };

  return openAlert;
};

export const useConfirm = () => {
  const setState = useSetRecoilState(popupState);

  const openAlert = (
    message: string,
    options: {
      onConfirm: () => void;
    }
  ) => {
    setState([
      {
        type: PopupType.CONFIRM,
        message,
        onConfirm: options.onConfirm,
      },
    ]);
  };

  return openAlert;
};
