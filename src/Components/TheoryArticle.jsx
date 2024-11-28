import React from "react";

import books from "../Assets/Images/StudySection/studyingBooks_1.webp";
import students from "../Assets/Images/StudySection/studyingCloseUp_1.webp";

import styles from "../Styles/Study.module.css";
import rollInStyles from "../Styles/RollInAnimation.module.css";

export function TheoryArticle() {
  return (
    <section className={`${styles.studyArticle} ${rollInStyles.rollInElement}`}>
      <div className={`${styles.studyTheoryImages} ${styles.first}`}>
        <img src={books} alt="Складені книги" loading="lazy" />
        <img
          src={students}
          alt="Студенти радятся під час уроку"
          loading="lazy"
        />
      </div>
      <div className={styles.articleContent}>
        <h3>
          <strong>Теоретична частина</strong> включає:
        </h3>
        <ul className={styles.studyList}>
          <li>Правила дорожнього руху </li>
          <li>Надання першої медичної допомоги </li>
          <li>Нюанси при оформленні штрафів </li>
          <li>Білети тестів сервісного центру МВС</li>
          <li>
            Лекції супроводжуються прикладами та моделюванням дорожніх ситуацій.
          </li>
        </ul>
      </div>
    </section>
  );
}
