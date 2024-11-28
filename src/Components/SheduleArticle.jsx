import React from "react";

import TheoryScheduleTable from "../Components/TheoryScheduleTable";
import rollInStyles from "../Styles/RollInAnimation.module.css";

export function SheduleArticle() {
  return (
    <section
      className={`mx-auto my-[100px] px-3 sm:w-[500px] lg:w-auto ${rollInStyles.rollInElement}`}
    >
      <TheoryScheduleTable />
      <h3 className="text-center">
        Розклад <strong>практичних</strong> занять
      </h3>
      <p>
        Розклад водіння <strong>складається індивідуально</strong> для кожного
        учня, з урахуванням його побажань, можливостей та розкладу теоретичних
        занять.
      </p>
      <p>
        У позаробочий час водіння проводяться за домовленістю з інструктором.
      </p>
      <p className="mt-2 rounded-2xl bg-[#fece00] p-3 text-justify shadow-md">
        Якщо ви маєте посвідчення водія, але давно не сиділи за кермом — для вас
        пропонуємо додаткові уроки практичного водіння, після яких ви будете
        впевнено відчувати себе у міському трафіку.
      </p>
    </section>
  );
}
