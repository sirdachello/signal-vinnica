import React from "react";

import styles from "../Styles/ContentDivider.module.css";

export default function ContentDivider({ text }) {
  return (
    <div className={styles.dividerBlock}>
      <h2>{text}</h2>
    </div>
  );
}
