import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./ExtendedInfo.module.css";
import { useParams, useLocation, useHistory, Link } from "react-router-dom";
import { getPolicemanFromDb } from "../../redux/operations/asyncOps";
import Loading from "../Loader/Loader";

const ExtendedInfo = () => {
  const number = useParams().number;
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const policeman = useSelector((state) => state.policeman);
  const loader = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(getPolicemanFromDb(number));
  }, [dispatch, number]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const onClickHandler = () => {
    history.push({ ...location.state.from });
  };

  return (
    <>
      {loader && <Loading />}
      {!!policeman.name && (
        <div className={styles.card}>
          <div className={styles.mainInfo}>
            <div className={styles.photo}>
              <img
                src={require(`../../database/images/policeman/${policeman.photoUniform}`)}
                alt={`${policeman.name}${policeman.surname}`}
                className={styles.firstPhoto}
              />
              <img
                src={require(`../../database/images/department/${policeman.photoСhevron}`)}
                alt={policeman.department}
                className={styles.photoСhevron}
              />
              <img
                src={require("../../database/images/border/first.png")}
                className={styles.firstBorder}
                alt="border"
              />
            </div>
            <div className={styles.data}>
              <p className={styles.rank}>{policeman.rank}</p>
              <p className={styles.name}>
                {policeman.surname} {policeman.name}
              </p>
              <p className={styles.department}>{policeman.department}</p>
              <p className={styles.info}>
                <span className={styles.span}>номер жетона: </span>
                {policeman.number}
              </p>
              <p className={styles.info}>
                <span className={styles.span}>дата народження: </span>
                {policeman.birth}
              </p>
              <p className={styles.info}>
                <span className={styles.span}>остання зміна: </span>
                {policeman.death}
              </p>
            </div>
          </div>
          <div>
            <p className={styles.fromAuthor}>{policeman.fromAuthor}</p>
            {policeman.awards &&
              policeman.awards.map((award) => (
                <p className={styles.award} key={award}>
                  {award}
                </p>
              ))}
          </div>
          <div>
            {policeman.story &&
              policeman.story.map((s) => (
                <div
                  key={`${s.author}-${s.text.length}`}
                  className={styles.memory}
                >
                  <p className={styles.text}>{s.text}</p>
                  <p className={styles.author}>- {s.author}.</p>
                </div>
              ))}
            <p className={styles.postScriptum}>{policeman.ps}</p>
          </div>
          <div className={styles.secondPhotoBlock}>
            <img
              src={require(`../../database/images/policeman/${policeman.photoNoUniform}`)}
              alt={`${policeman.name}${policeman.surname}`}
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
              pathname: `/response/${policeman.number}`,
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
      )}
    </>
  );
};

export default ExtendedInfo;
