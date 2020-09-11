import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../Loader/Loader";

import styles from "./Response.module.css";
import {
  getPolicemanFromDb,
  offerResponse,
} from "../../redux/operations/asyncOps";
import { offerStorySendOff } from "../../redux/actions/offerStory";

const Response = () => {
  const [response, setResponse] = useState({});
  const policeman = useSelector((state) => state.policeman);
  const loader = useSelector((state) => state.loader);
  const offerStorySend = useSelector((state) => state.offerStory);
  const dispatch = useDispatch();
  const number = useParams().number;
  const history = useHistory();
  const location = useLocation();
  const { name, surname } = policeman;

  if (!policeman.name) {
    dispatch(getPolicemanFromDb(number));
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    return () => {
      dispatch(offerStorySendOff());
    };
  }, [dispatch]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setResponse({ ...response, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(offerResponse(number, response));
    e.target.reset();
  };

  const onClickHandler = () => {
    history.push(location.state.from);
  };

  return (
    <>
      {loader && <Loading />}

      <div className={styles.wrapper}>
        {!offerStorySend && (
          <>
            <h2 className={styles.name}>
              {name} {surname}
            </h2>
            <form className={styles.form} onSubmit={onSubmitHandler}>
              <textarea
                autoCapitalize="sentences"
                className={styles.inputText}
                name="text"
                placeholder="Ваш відгук..."
                autoFocus={true}
                onInput={onChangeHandler}
                required
              />
              <input
                className={styles.inputAuthor}
                type="text"
                name="author"
                placeholder="Автор (наприклад: колега, друг, дружина)"
                onInput={onChangeHandler}
                required
              />
              <input
                className={styles.inputAuthor}
                type="email"
                name="email"
                placeholder="Ваш email (необов’язково)"
                onInput={onChangeHandler}
              />
              <button className={styles.formButton}>Відправити відгук</button>
              <p className={styles.remark}>
                * всі відгуки модеруються адміністрацією сайту
              </p>
            </form>
          </>
        )}
        {offerStorySend && (
          <p className={styles.offerSend}>ваш запит принято</p>
        )}
        <button className={styles.formButton} onClick={onClickHandler}>
          Назад
        </button>
      </div>
    </>
  );
};

export default Response;
