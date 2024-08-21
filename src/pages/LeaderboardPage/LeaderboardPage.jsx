/* import { useNavigate } from "react-router-dom"; */
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderboardPage.module.css";
import { API } from "../../components/api/leaders";
import cn from "classnames";

export function LeaderboardPage() {
  /*  const navigate = useNavigate(); */

  const [table, setTable] = useState([]);

  useEffect(() => {
    API.getLeaders().then(data => {
      const table = data.leaders.sort((left, right) => left.time - right.time).slice(0, 10);
      setTable(table);
    });
  }, []);

  function showTime(num) {
    const minutes = Math.floor(num / 60);
    const seconds = num % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Лидерборд</p>
        <Button>Начать игру</Button>
      </div>
      <ul>
        <li className={cn(styles.list, styles.listHeader)}>
          <p>Позиция</p>
          <p>Пользователь</p>
          <p>Время</p>
        </li>
        {table.map((record, index) => {
          return (
            <li className={styles.list}>
              <p>#{index + 1}</p>
              <p>{record.name}</p>
              <p>{showTime(record.time)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
