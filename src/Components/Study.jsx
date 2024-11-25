import { RequirementsSection } from "./RequirementsSection";
import { SheduleArticle } from "./SheduleArticle";
import { PracticeArticle } from "./PracticeArticle";
import { TheoryArticle } from "./TheoryArticle";
import ReviewsSection from "../Components/ReviewsSection";

import rollInStyles from "../Styles/RollInAnimation.module.css";
import { useEffect } from "react";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(rollInStyles.visible);
    }
  });
});

export default function Study() {
  useEffect(() => {
    const myList = document.querySelectorAll(`.${rollInStyles.rollInElement}`);
    if (myList) {
      myList.forEach((el) => observer.observe(el));
    }

    return () => {
      if (myList) myList.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className={rollInStyles.rollInElement}>
      <p>
        У навчанні використовується унікальна авторська методика, розроблена
        досвідченими викладачами. Вона значно підвищує ефективність засвоєння
        матеріалу і сприяє успішному оволодінню навичками водіння автомобіля.
      </p>
      <p>
        Програма навчання розрахована на <strong>2,5</strong> місяці та{" "}
        складається з <strong>теоретичної</strong> і <strong>практичної</strong>{" "}
        частин .{" "}
      </p>
      </div>
      <TheoryArticle />
      <PracticeArticle />
      <SheduleArticle />
      <RequirementsSection />
    </>
  );
}
