import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./List.module.css";
import {
  filteredPolicemanList,
  policemanListFilterSelector,
} from "../../redux/selectors";
import { setFilter } from "../../redux/actions/policemanListFilter";
import { Link, useLocation } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const list = useSelector((state) => filteredPolicemanList(state));
  const filter = useSelector((state) => policemanListFilterSelector(state));

  useEffect(() => {
    window.scrollTo({
      top: sessionStorage.getItem("listScroll"),
    });
    return () => {
      sessionStorage.setItem("listScroll", window.scrollY);
    };
  }, []);

  const onchangeHandler = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <div className={styles.list}>
      {!!list.length && (
        <ul className={styles.listList}>
          {list.map((i) => (
            <li key={i.number}>
              <div className={styles.mainInfo}>
                <div className={styles.photo}>
                  <Link
                    className={styles.listLink}
                    to={{
                      pathname: `/last-duty/${i.number}`,
                      state: {
                        from: location,
                      },
                    }}
                  >
                    <img
                      src={require(`../../database/images/policeman/${i.photoUniform}`)}
                      alt={`${i.name}${i.surname}`}
                      className={styles.firstPhoto}
                    />
                    <div className={styles.chevronContainer}>
                      <img
                        src={require(`../../database/images/department/${i.photoСhevron}`)}
                        alt={i.department}
                        className={styles.photoСhevron}
                      />
                    </div>
                    <img
                      src={require("../../database/images/border/first.png")}
                      className={styles.firstBorder}
                      alt="border"
                    />
                  </Link>
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
            </li>
          ))}
        </ul>
      )}
      {list.length === 0 && <h2>за вашим запитом нічого не знайдено</h2>}

      <input
        className={styles.searchInput}
        id="filterInput"
        type="text"
        onChange={onchangeHandler}
        placeholder="Пошук..."
        value={filter}
      />
    </div>
  );
};

export default List;
