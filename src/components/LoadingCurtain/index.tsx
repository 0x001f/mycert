import styles from "./index.module.scss";
import clsx from "clsx";

export function LoadingCurtain() {
  return (
    <div
      className={clsx(
        "animate__animated curtainUp loadingCurtain z-10",
        styles.curtain
      )}
    />
  );
}
