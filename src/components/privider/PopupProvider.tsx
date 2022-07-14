import { FC, useMemo } from "react";
import { useRecoilState } from "recoil";
import { PopupType } from "../../models/client/Popup";
import { popupState } from "../../stores/popupStore";
import Confirm from "../popup/Confirm";
import css from "./PopupProvider.module.css";

interface PopupProviderProps {}

const PopupProvider: FC<PopupProviderProps> = () => {
  const [popup, setPopup] = useRecoilState(popupState);

  const popupItem = useMemo(() => popup[0], [popup]);

  const handleResetPopup = () => {
    setPopup([]);
  };

  if (!popupItem) {
    return null;
  }

  return (
    <div className={css.popupProvider}>
      {popupItem.type === PopupType.CONFIRM && (
        <Confirm
          onCancel={handleResetPopup}
          onConfirm={() => {
            popupItem.onConfirm();
            handleResetPopup();
          }}
        >
          {popupItem.message}
        </Confirm>
      )}
    </div>
  );
};

export default PopupProvider;
