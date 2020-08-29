import React from "react";
import Header from "./Containers/Header/Header";
import Footer from "./Containers/Footer/Footer";
import styles from "./App.module.css";
import Main from "./Containers/Main/Main";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
