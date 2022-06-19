import { FC, ReactNode } from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import cx from "classnames";
import Icon from "./Icon";
import css from "./Radio.module.css";

const Group: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={css.group}>{children}</div>;
};

interface RadioProps {
  checked: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

const Radio: FC<RadioProps> & { Group: typeof Group } = ({
  checked,
  onClick,
  children,
}) => {
  return (
    <span
      className={cx(css.Radio, {
        [css.checked]: checked,
      })}
      onClick={onClick}
    >
      <span>
        <Icon>
          <IoMdRadioButtonOn />
        </Icon>
      </span>
      {children && <label>{children}</label>}
    </span>
  );
};

Radio.Group = Group;

export default Radio;
