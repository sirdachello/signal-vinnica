import styles from "../Styles/BenefitsList.module.css";

import {ReactComponent as TurnIcon} from "../Assets/Icons/Turn.svg"

export default function BenefitCard({image, alt, text, h3, flippedCard, setFlippedCard, index}) {
  
  function handleFlip() {
    setFlippedCard(prev => {
      return prev === index? "" : index;
    });
  }

    return (
        <li className={styles.ListItem}>
        <div onClick={handleFlip} className={flippedCard === index? `${styles.card} ${styles.flipped}` : styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardFront}>
              <TurnIcon className={styles.turnIcon}/>
              <div className={styles.cardImageContainer}>
                <img src={image} alt={alt} loading="lazy" />
              </div>
            </div>
            <div className={styles.cardBack}>
              <p>
              {text}
              </p>
            </div>
          </div>
        </div>
        <h3>{h3}</h3>
      </li>
    )
}