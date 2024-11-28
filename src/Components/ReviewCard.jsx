import React, { useState } from "react";

import { ReactComponent as StarIcon } from "../Assets/Icons/StarIcon.svg";
import styles from "../Styles/ReviewCard.module.css"

export default function ReviewCard({ client }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-[320px] md:max-w-[400px]">
      <a href={client.reviewLink} target="_blank" rel="noreferrer">
        <div className="flex items-center justify-center gap-5 rounded-t-3xl bg-primary py-3 transition-all duration-200 hover:bg-[#ffd000c7] hover:scale-105 hover:translate-y-[5px] hover:rounded-3xl">
          <img
            className="size-[50px]"
            src={require(`../Assets/Photos/Clients/${client.profileImageLink}`)}
            alt={`Аватар профілю ${client.reviewName}`}
          />

          <div>
            {client.reviewName}
            <div className="flex">
            {[...Array(5)].map((_, index) => (
                <StarIcon key={index} aria-label={`Зірка ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </a>
      <div className={isExpanded ? styles.cardTextBlockExpanded  : styles.cardTextBlock}>
        <span
          className={isExpanded ? styles.cardTextExpanded : styles.cardText}
        >
          {client.reviewText}
        </span>
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className={styles.cardButton}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Згорнути" : "Розгорнути"}
        >
          {isExpanded ? "Меньше" : "Більше"}
        </button>
      </div>
    </div>
  );
}
