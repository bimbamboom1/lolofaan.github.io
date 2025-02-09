import { MouseEvent, PropsWithChildren } from "react";
import CN from "classnames";

import styles from "./Button.module.scss";

export type BtnColors = "green" | "red" | "default";

interface ButtonProps {
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
  color?: BtnColors;
  onMouseOver?: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseOut?: (event: MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
}

const Button = ({
  onClick,
  children,
  color = "default",
  onMouseOver,
  onMouseOut,
  disabled,
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <div
      className={CN(styles["wrapper"], {
        [styles.green]: color === "green",
        [styles.red]: color === "red",
      })}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <button
        className={styles["pixelButton"]}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
      <div className={styles["bottom"]}></div>
      <div className={styles["shadow"]}></div>
    </div>
  );
};

export default Button;
