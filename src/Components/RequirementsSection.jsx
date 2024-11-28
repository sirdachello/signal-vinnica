import React from "react";

import rollInStyles from "../Styles/RollInAnimation.module.css";
import styles from "../Styles/RequirementsSection.module.css";

export function RequirementsSection() {
  return (
    <section className={`${rollInStyles.rollInElement}`}>
      <h3 className="text-center">
        <strong>Необхідні документи</strong> для запису в автошколу:
      </h3>
      <ol className={styles.reqList}>
        <li>Ксерокопія паспорта</li>
        <li>Ксерокопія ідентифікаційного коду</li>
        <li>Фотографія 3x4 см (1 шт.)</li>
        <li>
          Ксерокопія довідки або витягу про реєстрацію місця проживання{" "}
          <strong>(для паспорта у вигляді ID картки)</strong>
        </li>
        <li>
          Медична довідка щодо придатності до керування транспортним засобом
        </li>
      </ol>
      <div>
        <p className="mt-5 rounded-2xl bg-primary p-3 text-justify shadow-md">
          Оплата за навчання проводиться частинами. При подачі документів
          сплачується аванс у розмірі 3000 грн, а решта суми виплачується
          протягом 2 місяців.
        </p>
      </div>
    </section>
  );
}
