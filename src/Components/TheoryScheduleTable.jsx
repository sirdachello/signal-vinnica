import React from "react";
import styles from "../Styles/TheoryScheduleTable.module.css";

export default function TheoryScheduleTable() {
  return (
    <table className={styles.theoryTable}>
      <caption>
        Розклад занять з <strong>теорії</strong>
      </caption>
      <tbody>
        <tr>
          <td>Вечірня група</td>
          <td>18:00 - 21:00</td>
          <td>Вівторок - Четвер - П'ятниця</td>
        </tr>
        <tr>
          <td>Група вихідного дня</td>
          <td>09:00 - 14:00</td>
          <td>Субота - Неділя</td>
        </tr>
      </tbody>
      <tfoot>
        <td colSpan={3}>
          Формування груп відбувається за 2 тижні до початку занять
        </td>
      </tfoot>
    </table>
  );
}
