import ContentDivider from '../Components/ContentDivider';
import Divider from "../Components/Divider";

import styles from "../Styles/Home.module.css";


export default function Docs() {



  return (
    <>
      <section>
        <Divider text="Наші випускники" />
        <div className={styles.contentContainer}>
        </div>
      </section>
      <section className={styles.studySection}> 
        <ContentDivider  text="Аудиторії, Викладаі та Автопарк"/>
        <div className={styles.contentContainer}>
        </div>
      </section>
    </>
  );
}
