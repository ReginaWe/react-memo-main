import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderboardPage.module.css";
import { API } from "../../components/api/leaders";
import cn from "classnames";

import hardModeImageUrl from "./images/hardMode.svg";
import noSuperPowerImageUrl from "./images/noSuperPower.svg";

export function LeaderboardPage() {
  const navigate = useNavigate();

  const [table, setTable] = useState([]);

  useEffect(() => {
    API.getLeaders().then(data => {
      const table = data.leaders.sort((left, right) => left.time - right.time).slice(0, 10);
      setTable(table);
    });
  }, []);

  function handleStartGame() {
    navigate("/");
  }

  function showTime(num) {
    const minutes = Math.floor(num / 60);
    const seconds = num % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Лидерборд</p>
        <Button onClick={handleStartGame}>Начать игру</Button>
      </div>
      <ul>
        <li className={cn(styles.list, styles.listHeader)}>
          <p>Позиция</p>
          <p>Пользователь</p>
          <p>Достижения</p>
          <p>Время</p>
        </li>
        {table.map((record, index) => {
          return (
            <li key={index} className={styles.list}>
              <p>#{index + 1}</p>
              <p>{record.name}</p>
              <div className={styles.achievementContainer}>
                {
                  <>
                    <div className={styles.achievementBlock}>
                      <div>
                        <p>
                          Игра пройдена
                          <br />в сложном режиме
                        </p>
                      </div>
                      <img src={hardModeImageUrl} alt="hardMode" />
                    </div>
                    <div className={styles.achievementBlock}>
                      <div>
                        <p>
                          Игра пройдена
                          <br />
                          без супер-сил
                        </p>
                      </div>
                      <img src={noSuperPowerImageUrl} alt="noSuperPower" />
                    </div>
                  </>
                }
              </div>
              <p>{showTime(record.time)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
