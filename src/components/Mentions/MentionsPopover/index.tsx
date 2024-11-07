import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  height: number;
  width: number;
}

const MentionsPopover = ({ height, width, children }: Props) => {
  console.log(children);
  return (
    <div
      className={styles["wrapper"]}
      style={{
        height: height + "px",
        width: width + "px",
      }}
    >
      {React.Children.map(children, (child) => {
        return child;
      })}
    </div>
  );
};

export default MentionsPopover;
