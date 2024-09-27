import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { API } from "../api/leaders";
import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

export function EndGameModal({ isWon, isSuperWin, gameDurationSeconds, gameDurationMinutes, onClick, achievements }) {
  const title = isSuperWin ? "Вы попали на лидерборд" : isWon ? "Вы попали на лидерборд" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const [inputValue, setInputValue] = useState("");

  function handleChangeInputValue(event) {
    setInputValue(event.target.value);
  }

  function handleSendStatistics() {
    if (!inputValue) {
      return;
    }
    API.addLeader({
      name: inputValue || "Пользователь",
      time: gameDurationMinutes * 60 + gameDurationSeconds,
      achievements,
    }).then(() => setInputValue(""));
  }

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isSuperWin && (
        <>
          <input
            className={cn(styles.inputName, { [styles.error]: !inputValue })}
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
