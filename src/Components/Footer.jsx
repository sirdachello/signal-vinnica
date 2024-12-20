import styles from "../Styles/Footer.module.css";
import { ReactComponent as CarIcon } from "../Assets/Animations/car.svg";
export default function Footer() {
  return (
    <>
        <footer >
      <div className={styles.footerBlock}>
        <address style={{ fontStyle: "normal" }}>
          &#x1F30D;{" "}
          <a
            target="_blank"
            aria-label="Посилання на Гугл карту"
            href="https://www.google.com/maps?ll=49.229681,28.45854&z=16&t=m&hl=en&gl=US&mapclient=embed&q=Vasylya+Stusa+St,+22+Vinnytsia+Vinnyts%27ka+oblast,+Ukraine+21000"
            rel="noopener noreferrer"
          >
            Вінниця, вул.Стуса, 22{" "}
          </a>
          <br />
          &#9990; <a aria-label="Зателефонувати за номером (093) 889-41-10" href="tel:+380938894110">(093) 889-41-10</a>
          <br />
          &#9990; <a aria-label="Зателефонувати за номером (098) 561-12-22" href="tel:+380985611222">(098) 561-12-22</a>
          <br />
          &#9742; <a aria-label="Зателефонувати за номером  (0432) 67-72-22" href="tel:+380432677222">(0432) 67-72-22</a>
          <br />
          &#x2709; <a aria-label="Відправити лист на пошту signal-vin@ukr.net" href="mailto:signal-vin@ukr.net">signal-vin@ukr.net</a>
          <br />
        </address>

        <iframe
          className={styles.footerMap}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5210.912279821571!2d28.4565007!3d49.2298405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b7ef9e736c7%3A0x892399f63a09364d!2z0KHQuNCz0L3QsNC7!5e0!3m2!1suk!2sua!4v1732195422799!5m2!1suk!2sua"
          title="Положення філії школи Сигнал на Стуса 22"
          width={500}
          height={350}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <CarIcon aria-hidden="true" className={styles.CarIcon} />
      </div>
      <a id="footer"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-1 text-center text-[14px] text-[#a5a5a5]"
        href="https://www.linkedin.com/in/valentyn-kliuchev-2642762a9/"
      >
        By Valentine Kliuchev
      </a>
    </footer>
    </>
  );
}

  