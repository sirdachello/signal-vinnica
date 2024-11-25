import { StudyProtection } from "../Components/StudyProtection";
import Study from "../Components/Study";
import ContentDivider from "../Components/ContentDivider";
import Divider from "../Components/Divider";

import ReviewsSection from "../Components/ReviewsSection";

import BenefitsList from "../Components/BenefitsList";

import styles from "../Styles/Home.module.css";


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
        <ContentDivider text="Охорона праці" />
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
