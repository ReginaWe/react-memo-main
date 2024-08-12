import { Button } from "../Button/Button";
import styles from "./LeaderboardModal.module.css";

export function LeaderboardModal({ gameDurationSeconds, gameDurationMinutes, onClick }) {
  return (
    <div className={styles.modal}>
      <img className={styles.image} src="./images/leaderboard.svg" alt="leaderboard" />
      <h2 className={styles.title}>Вы попали на лидерборд!</h2>
      <input placeholder="Пользователь"></input>
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Играть снова</Button>
    </div>
  );
}
