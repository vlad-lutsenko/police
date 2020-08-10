import React from "react";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.board}>
        <p className={styles.phrase}>Ви завжди залишаєтесь з нами - в строю!</p>
      </div>
    </div>
  );
};

export default HomePage;
