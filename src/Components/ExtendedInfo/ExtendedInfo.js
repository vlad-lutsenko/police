import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./ExtendedInfo.module.css";
import { useParams, useLocation, useHistory, Link } from "react-router-dom";
import { policemanListSelector } from "../../redux/selectors";

const ExtendedInfo = () => {
  const list = useSelector((state) => policemanListSelector(state));

  const params = useParams();
  const location = useLocation();
  const history = useHistory();

  const number = params.number;

  const i = list.find((policeman) => policeman.number === number);

  const onClickHandler = () => {
    history.push({ ...location.state.from });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.mainInfo}>
          <div className={styles.photo}>
            <img
              src={require(`../../database/images/policeman/${i.photoUniform}`)}
              alt={`${i.name}${i.surname}`}
              className={styles.firstPhoto}
            />
            <img
              src={require(`../../database/images/department/${i.photoСhevron}`)}
              alt={i.department}
              className={styles.photoСhevron}
            />
            <img
              src={require("../../database/images/border/first.png")}
              className={styles.firstBorder}
              alt="border"
            />
          </div>
          <div className={styles.data}>
            <p className={styles.rank}>{i.rank}</p>
            <p className={styles.name}>
              {i.surname} {i.name}
            </p>
            <p className={styles.department}>{i.department}</p>
            <p className={styles.info}>
              <span className={styles.span}>номер жетона: </span>
              {i.number}
            </p>
            <p className={styles.info}>
              <span className={styles.span}>дата народження: </span>
              {i.birth}
            </p>
            <p className={styles.info}>
              <span className={styles.span}>остання зміна: </span>
              {i.death}
            </p>
          </div>
        </div>
        <div>
          <p className={styles.fromAuthor}>{i.fromAuthor}</p>
          {i.awards &&
            i.awards.map((award) => (
              <p className={styles.award} key={award}>
                {award}
              </p>
            ))}
        </div>
        <div>
          {i.story.map((s) => (
            <div key={`${s.author}-${s.text.length}`} className={styles.memory}>
              <p className={styles.text}>{s.text}</p>
              <p className={styles.author}>{s.author}</p>
            </div>
          ))}
          <p className={styles.postScriptum}>{i.ps}</p>
        </div>
        <div className={styles.secondPhotoBlock}>
          <img
            src={require(`../../database/images/policeman/${i.photoNoUniform}`)}
            alt={`${i.name}${i.surname}`}
            className={styles.secondPhoto}
          />

          <img
            alt="secondBorder"
            className={styles.secondBorder}
            src={require("../../database/images/border/second.png")}
          />
        </div>
        <Link
          to={{
            pathname: `/response/${i.number}`,
            state: {
              from: location,
            },
          }}
          className={styles.responseLink}
        >
          <button className={styles.button}>Запропонувати відгук</button>
        </Link>
        <button className={styles.button} onClick={onClickHandler}>
          Назад
        </button>
      </div>
    </>
  );
};

export default ExtendedInfo;
