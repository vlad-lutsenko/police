import React, { useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addStory } from "../../redux/actions/policemanList";

import styles from "./Response.module.css";

const Response = () => {
  const params = useParams();
  const number = params.number;
  const list = useSelector((state) => state.policeList);
  const [response, setResponse] = useState({});
  const dispatch = useDispatch();
  const policeman = list.find((policeman) => policeman.number === number);
  const { name, surname } = policeman;
  const history = useHistory();
  const location = useLocation();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setResponse({ ...response, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addStory(number, response));
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
        />
        <input
          className={styles.inputAuthor}
          type="text"
          name="author"
          placeholder="Автор (наприклад: колега, друг, дружина)"
          onInput={onChangeHandler}
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
