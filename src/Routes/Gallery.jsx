import ContentDivider from '../Components/ContentDivider';
import Divider from "../Components/Divider";

import styles from "../Styles/Gallery.module.css";

import Mizyuk from '../Assets/Photos/Teachers/Мізюк.jpg'
import Fedorovich from '../Assets/Photos/Teachers/Федорович.jpg'
import Shevchenko from '../Assets/Photos/Teachers/Шевченко.jpg'
import Shevchuk from '../Assets/Photos/Teachers/Шевчук.jpg'
import Shinkovskiy from '../Assets/Photos/Teachers/Шиньковий.jpg'
import Yakovishen from '../Assets/Photos/Teachers/Яковишен.jpg'
import Folz from '../Assets/Photos/Teachers/фольц-юрчак.jpg'
import { useState } from 'react';

const teachersImgList = [Mizyuk, Fedorovich, Shevchenko, Shevchuk, Shinkovskiy, Yakovishen, Folz]

export default function Gallery() {
    const [index, setIndex] = useState(0);

    const teacherImagesItem = teachersImgList.map((image, i) => {
        return (
            <img className={styles.imageItem} key={i} src={image} alt="" style={{transform: `translateX(${-100 * index}%)`}} />
        )
    })

    function nextImage() {

        setIndex(prev => {
            if(prev === teachersImgList.length-1) {
                return 0;
            } return prev + 1;
        })
    }

    function prevImage() {
        setIndex(prev => {
            if(prev === 0) {
                return teachersImgList.length-1;
            } return prev - 1;
        })
    }
  return (
    // https://www.youtube.com/watch?v=Kx8XlKRBZx8&ab_channel=WebDevSimplified
    // https://www.youtube.com/watch?v=Kx8XlKRBZx8&ab_channel=WebDevSimplified
    // https://www.youtube.com/watch?v=Kx8XlKRBZx8&ab_channel=WebDevSimplified
    // https://www.youtube.com/watch?v=Kx8XlKRBZx8&ab_channel=WebDevSimplified
    // https://www.youtube.com/watch?v=Kx8XlKRBZx8&ab_channel=WebDevSimplified
    // https://www.youtube.com/watch?v=Kx8XlKRBZx8&ab_channel=WebDevSimplified
    // https://www.youtube.com/watch?v=Kx8XlKRBZx8&ab_channel=WebDevSimplified
    <>
      <section>
        <Divider text="Наші випускники" />
        <div className={styles.contentContainer}>
        </div>
      </section>
      <section className={styles.studySection}> 
        <ContentDivider  text="Викладачі"/>
            <div className={styles.imageContainer}>
                {teacherImagesItem}
            </div>
            <button onClick={prevImage}>prev</button>
            <button onClick={nextImage}>next</button>
        {/* <ContentDivider  text="Автомобілі"/>
        <div className={styles.imageContainer}>
                <img src={Mizyuk} alt="" className={styles.imageItem} />
                <img src={Fedorovich} alt="" className={styles.imageItem} />
                <img src={Shevchenko} alt="" className={styles.imageItem} />
                <img src={Shevchuk} alt="" className={styles.imageItem} />
                <img src={Shinkovskiy} alt="" className={styles.imageItem} />
                <img src={Yakovishen} alt="" className={styles.imageItem} />
                <img src={Folz} alt="" className={styles.imageItem} />
            </div>
        <ContentDivider  text="Аудиторії"/>
        <div className={styles.imageContainer}>
                <img src={Mizyuk} alt="" className={styles.imageItem} />
                <img src={Fedorovich} alt="" className={styles.imageItem} />
                <img src={Shevchenko} alt="" className={styles.imageItem} />
                <img src={Shevchuk} alt="" className={styles.imageItem} />
                <img src={Shinkovskiy} alt="" className={styles.imageItem} />
                <img src={Yakovishen} alt="" className={styles.imageItem} />
                <img src={Folz} alt="" className={styles.imageItem} />
            </div> */}
      </section>
    </>
  );
}
