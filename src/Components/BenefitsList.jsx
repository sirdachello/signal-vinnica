import monitor from "../Assets/Icons/monitor.webp";
import hiring from "../Assets/Icons/hiring.webp";
import brake from "../Assets/Icons/brake.webp";
import cogs from "../Assets/Icons/cogs.webp";
import insurance from "../Assets/Icons/car-insurance.webp";
import gift from "../Assets/Icons/gift.webp";
import training from "../Assets/Icons/training.webp";
import years from "../Assets/Icons/Group1.webp";

import styles from "../Styles/BenefitsList.module.css";

import React ,{ useEffect, useState } from "react";
import BenefitCard from "./BenefitCard";

const cardsInfo = [
  {
    image: years,
    h3: "Років досвіду",
    text: "Одна із перших автошкіл міста Вінниці , яка працює з 1995 року і сміливо поєднує якісне і професійне навчання.",
    alt: "Кількість років успішної роботи бізнесу",
  },
  {
    image: insurance,
    h3: "сучасні автомобілі",
    text: "У нашому автопарку 10 навчальних автомобілів з механічною та автоматичною коробкою передач, які регулярно проходять технічний огляд. Також ми маємо мотоцикл та мопед!",
    alt: "Автомобіль з захистом у вигляді щита, символізуючи безпеку",
  },
  {
    image: hiring,
    h3: "досвідчені атестовані викладачі",
    text: "Усі викладачі та інструктори автошколи мають атестаційні посвідчення ГСЦМВС та РСЦМВС, що підтверджують статус фахівця з підготовки водіїв транспортних засобів.",
    alt: "Ілюстрація атестованого викладача з посвідченням",
  },
  {
    image: monitor,
    h3: "сучасне технічне оснащення аудиторій",
    text: "Наша школа є однією з автошкіл Вінниці, яка знаходиться в постійному процесі вдосконалення матеріально-технічної бази і впровадження новаторських технологій та ідей.",
    alt: "Сучасний комп'ютерний монітор",
  },
  {
    image: training,
    h3: "індивідуальні методики навчання",
    text: "В арсеналі нашої школи є спеціально розроблені індивідуальні методики, перевірені роками.",
    alt: "Група людей, які беруть участь у навчальному процесі",
  },
  {
    image: brake,
    h3: "Додаткові уроки  водіння",
    text: "Паркування, маневрування, їзда заднім ходом, екстрене гальмування, об’їзд перешкод, відчуття швидкості та робота з габаритами — навчимо всього!",
    alt: "Чобіток на педалі гальма автомобіля",
  },
  {
    image: cogs,
    h3: "виробнича майстерня",
    text: "У наявності усе необхідне для проведення занять з будови та технічного обслуговування автомобіля!",
    alt: "Механічні шестерні",
  },
  {
    image: gift,
    h3: "акційні пропозиції",
    text: "Подарункові сертифікати до урочистих подій та свят! Акційні пропозиції, що приносять радість!",
    alt: "Загорнутий подарунок на святкову подію",
  },
]

const useIntersectionObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.showCard);
        }
      });
    });

    const listItems = document.querySelectorAll(`.${styles.ListItem}`);
    listItems.forEach((item) => observer.observe(item));

    return () => {
      listItems.forEach((item) => observer.unobserve(item));
    };
  }, []);
};

export default function BenefitsList() {
    const [flippedCard, setFlippedCard] = useState();

    useIntersectionObserver();

      const cards = cardsInfo.map((card, index) => {
        return (
          <React.Fragment key={index}>
          <BenefitCard setFlippedCard={setFlippedCard} flippedCard={flippedCard} index={index} image={card.image} h3={card.h3} text={card.text} alt={card.alt}/>
          </React.Fragment>
        )
      })

      return (
        <ul className={styles.List}>
          {cards}
        </ul>
      )
}