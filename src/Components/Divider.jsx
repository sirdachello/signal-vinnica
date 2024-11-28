import styles from "../Styles/Divider.module.css";

export default function Divider({ text }) {
  return (
    <>
      <div className={styles.roadDivider}></div>
      <h2 className={styles.dividerTitle}>{text}</h2>
      <div className={styles.roadDividerWhite}></div>
    </>
  );
}
