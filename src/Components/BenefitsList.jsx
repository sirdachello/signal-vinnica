import monitor from "../Assets/Icons/monitor.png";
import hiring from "../Assets/Icons/hiring.png";
import brake from "../Assets/Icons/brake.png";
import cogs from "../Assets/Icons/cogs.png";
import insurance from "../Assets/Icons/car-insurance.png";
import gift from "../Assets/Icons/gift.png";
import training from "../Assets/Icons/training.png";
import years from "../Assets/Icons/Group 1 (1).png";

import styles from "../Styles/BenefitsList.module.css";

import { useEffect, useState } from "react";
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
    text: "Усі викладачі та інструктори автошколи мають атестаційні посвідчення ГСЦМВС, що підтверджують статус фахівця з підготовки водіїв транспортних засобів.",
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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {  
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.showCard);
      } else {
        entry.target.classList.remove(styles.showCard);
      }
    });
  });

export default function BenefitsList() {
    const [flippedCard, setFlippedCard] = useState();
    useEffect(() => {
        const myList = document.querySelectorAll(`.${styles.ListItem}`);
        if (myList) {
          myList.forEach((el) => observer.observe(el));
        }
    
        return () => {
          if (myList) myList.forEach((el) => observer.unobserve(el));
        };
      }, []);

      const cards = cardsInfo.map((card, index) => {
        return (
          <BenefitCard setFlippedCard={setFlippedCard} flippedCard={flippedCard} index={index} image={card.image} h3={card.h3} text={card.text} alt={card.alt}/>
        )
      })

      return (
        <ul className={styles.List}>
          {cards}
        </ul>
      )
}