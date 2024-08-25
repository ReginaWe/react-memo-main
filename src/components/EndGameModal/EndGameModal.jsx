import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { API } from "../api/leaders";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function EndGameModal({ isWon, isSuperWin, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const title = isSuperWin ? "Вы попали на лидерборд" : isWon ? "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  function handleChangeInputValue(event) {
    setInputValue(event.target.value);
  }

  function handleSendStatistics() {
    API.addLeader({
      name: inputValue || "Пользователь",
      time: gameDurationMinutes * 60 + gameDurationSeconds,
    }).then(() => setInputValue(""));
    navigate("/leaderboard");
  }

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isSuperWin && (
        <>
          <input
            className={styles.inputName}
            placeholder="Пользователь"
            value={inputValue}
            onChange={handleChangeInputValue}
          />
          <Button onClick={handleSendStatistics}>Отправить</Button>
        </>
      )}

      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Начать сначала</Button>
      <Link to="/leaderboard" className={styles.leaderLink}>
        Перейти к лидерборду
      </Link>
    </div>
  );
}
