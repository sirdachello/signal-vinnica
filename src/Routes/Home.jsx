import React from "react";
import ContentDivider from "../Components/ContentDivider";
import Divider from "../Components/Divider";
import styles from "../Styles/Home.module.css";
import Study from "../Components/Study";
import BenefitsList from "../Components/BenefitsList";
import ReviewsSection from "../Components/ReviewsSection";
import StudyProtection from "../Components/StudyProtection";
import logoProtection from "../Assets/Images/Logo_of_State_Service_of_Mountain_Supervision_and_Industrial_Safety_of_Ukraine.svg-modified (1).png";
import protStyles from "../Styles/ProtectionDivider.module.css"

export default function Home() {
  return (
    <main>
      <article>
        <Divider text="Наші Переваги" />
        <div className={styles.contentContainer}>
          <BenefitsList />
        </div>
      </article>
      <article id="study" className={styles.studySection}>
        <ContentDivider text="Навчання" />
        <section className={styles.contentContainer}>
          <Study />
          
        </section>
      </article>
      <article id="protection" className={styles.studySection}>
        <div className={protStyles.dividerBlock}>
          <img
            className="size-16 sm:size-20"
            src={logoProtection}
            width={60}
            height={60}
            alt="Емблема охорони праці України"
          />
          <h2 className="sm:hidden">Охорона праці</h2>
          <h2 className="hidden sm:flex">Навчання з охорони праці</h2>
        </div>
        <section className={styles.contentContainer}>
          <StudyProtection />
        </section>
      </article>
      <article id="reviews" className={styles.studySection}>
        <ContentDivider text="Відгуки" />
        <section className={styles.contentContainer}>
          <ReviewsSection />
        </section>
      </article>
    </main>
  );
}
