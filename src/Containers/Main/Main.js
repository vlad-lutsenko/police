import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../../Components/HomePage/HomePage";
import Loader from "../../Components/Loader/Loader";

import styles from "./Main.module.css";
import { getListFromDb } from "../../redux/operations/asyncOps";
import { useDispatch } from "react-redux";

const List = lazy(() =>
  import("../../Components/List/List" /* webpackChunkName: "LastDuty" */)
);

const ExtendedInfo = lazy(() =>
  import(
    "../../Components/ExtendedInfo/ExtendedInfo" /*webpackChunkName: "ExtendedInfo" */
  )
);

const Response = lazy(() =>
  import("../../Components/Response/Response" /*webpackChunkName: "Response" */)
);

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListFromDb());
  }, [dispatch]);

  return (
    <div className={styles.mainPage}>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/last-duty/:number" component={ExtendedInfo} />
          <Route path="/last-duty" component={List} />
          <Route path="/response/:number" component={Response} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
