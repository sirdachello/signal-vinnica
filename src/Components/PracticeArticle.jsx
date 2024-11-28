import React from "react";

import cone from "../Assets/Images/StudySection/drivingCone.webp";
import wheel from "../Assets/Images/StudySection/drivingWheel.webp";

import styles from "../Styles/Study.module.css";
import rollInStyles from "../Styles/RollInAnimation.module.css";

export function PracticeArticle() {
  return (
    <section className={`${styles.studyArticle} ${rollInStyles.rollInElement}`}>
      <div className={`${styles.studyTheoryImages} ${styles.second}`}>
        <img
          className={styles.second}
          src={cone}
          alt="Автомобіль біля дорожніх конусів на тренувальному майданчику автошколи."
          loading="lazy"
        />
        <img
          src={wheel}
          alt="Студент автошколи у червоній сорочці за кермом."
          loading="lazy"
        />
      </div>
      <div className={styles.articleContent}>
        <h3>
          <strong>Практична частина</strong> починається через 3 тижні від
          початку навчання.
        </h3>
        <p>
          Спочатку на майданчику, а після засвоєння основних навичок, практичні
          заняття відбуватимуться <b>на вулицях міста</b>.
        </p>
        <p className="mt-2 rounded-2xl bg-[#fece00] p-3 text-justify shadow-md">
          Після завершення курсу слухачі здають внутрішній екзамен з правил
          дорожнього руху і водіння та отримують <strong>офіційний сертифікат </strong>
          про проходження підготовки водія транспортного засобу,{" "}
          <strong>
            <b>термін дії якого становить 2 роки</b>
          </strong>
          . Цей сертифікат спрямовується в сервісний центр МВС, де складається
          іспит на отримання посвідчення водія.
        </p>
      </div>
    </section>
  );
}
