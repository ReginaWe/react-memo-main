import { Button } from "../../components/Button/Button";
import styles from "./LeaderboardPage.module.css";

export function LeaderboardPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Лидерборд</p>
        <Button>Начать игру</Button>
      </div>
      <ul>
        <li>
          <div className={styles.list}>
            <p>Позиция</p>
            <p>Позьзователь</p>
            <p>Время</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
