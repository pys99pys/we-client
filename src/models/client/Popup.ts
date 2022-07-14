export enum PopupType {
  ALERT = "ALERT",
  CONFIRM = "CONFIRM",
}

interface Alert {
  type: PopupType.ALERT;
  message: string;
  onClick?: () => void;
}

interface Confirm {
  type: PopupType.CONFIRM;
  message: string;
  onConfirm: () => void;
}

export type PopupItem = Alert | Confirm;
