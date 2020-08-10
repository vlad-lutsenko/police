import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Containers/Header/Header";
import Footer from "./Containers/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import styles from "./App.module.css";

const List = lazy(() =>
  import("./Components/List/List" /* webpackChunkName: "LastDuty" */)
);

const ExtendedInfo = lazy(() =>
  import(
    "./Components/ExtendedInfo/ExtendedInfo" /*webpackChunkName: "ExtendedInfo" */
  )
);

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/last-duty/:number" component={ExtendedInfo} />
          <Route path="/last-duty" component={List} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
