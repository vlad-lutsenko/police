import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerItem}>
        <a
          className={styles.linkAlign}
          href="https://goo.gl/maps/iwMUKACpLMpJJi3a9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../database/images/icons/footerImg/location.png")}
            alt="location"
            className={styles.footerItemImg}
          />
          <p className={`${styles.footerItemText}`}>
            вул. Федора Ернста, 3, м. Київ, 03048
          </p>
        </a>
      </div>
      <div className={styles.footerItem}>
        <img
          src={require("../../database/images/icons/footerImg/phone.png")}
          alt="phone"
          className={styles.footerItemImg}
        />
        <p className={`${styles.footerItemText}`}>+380 (044) 287-82-82</p>
      </div>
      <div className={styles.footerItem}>
        <a
          href="mailto: public@patrol.police.gov.ua"
          className={styles.linkAlign}
        >
          <img
            src={require("../../database/images/icons/footerImg/email.png")}
            alt="email"
            className={styles.footerItemImg}
          />
          <p className={`${styles.footerItemText}`}>
            public@patrol.police.gov.ua
          </p>
        </a>
      </div>
      <div className={styles.footerItem}>
        <a
          href="http://patrol.police.gov.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkAlign}
        >
          <img
            src={require("../../database/images/icons/footerImg/site.png")}
            alt="site"
            className={styles.footerItemImg}
          />
          <p className={`${styles.footerItemText}`}>patrol.police.gov.ua</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
