import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { addStory } from "../../redux/actions/policemanList";

import styles from "./Response.module.css";
import { getPolicemanFromDb } from "../../redux/operations/asyncOps";

const Response = () => {
  const [response, setResponse] = useState({});
  const policeman = useSelector((state) => state.policeman);
  const { name, surname } = policeman;
  const dispatch = useDispatch();
  const number = useParams().number;
  const history = useHistory();
  const location = useLocation();

  if (!policeman.name) {
    dispatch(getPolicemanFromDb(number));
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setResponse({ ...response, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(response);
    // dispatch(addStory(number, response));
    e.target.reset();
  };

  const onClickHandler = () => {
    history.push(location.state.from);
  };

  return (
    <div className={styles.wrapper}>
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
        <button className={styles.formButton}>Відправити відгук</button>
      </form>
      <button className={styles.formButton} onClick={onClickHandler}>
        Назад
      </button>
    </div>
  );
};

export default Response;
