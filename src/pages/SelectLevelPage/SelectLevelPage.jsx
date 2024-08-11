import { Link, useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useGameMode } from "../../components/hooks/useGameMode";
import { Button } from "../../components/Button/Button";
import classNames from "classnames";
import { useState } from "react";

export function SelectLevelPage() {
  const { isEasyMode, setIsEasyMode } = useGameMode();
  const navigate = useNavigate();

  const handleEasyModeChange = event => {
    setIsEasyMode(event.target.checked);
  };

  const [levelMode, setLevelMode] = useState(0);

  function handleStart() {
    let pairsCount = 3;
    if (levelMode === 2) {
      pairsCount = 6;
    } else if (levelMode === 3) {
      pairsCount = 9;
    }
    navigate(`/game/${pairsCount}`);
  }

  function selectLevelMode(event) {
    console.log(Number(event.target.innerText));
    setLevelMode(Number(event.target.innerText));
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={classNames(styles.level, styles.levelLink)} onClick={selectLevelMode}>
            1
          </li>
          <li className={classNames(styles.level, styles.levelLink)} onClick={selectLevelMode}>
            2
          </li>
          <li className={classNames(styles.level, styles.levelLink)} onClick={selectLevelMode}>
            3
          </li>
        </ul>
        <div className={styles.gameModeBlock}>
          <p className={styles.gameMode}>Легкий режим (3 жизни)</p>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className={styles.checkbox}
            onChange={handleEasyModeChange}
            checked={isEasyMode}
          ></input>
          <label htmlFor="checkbox" className={styles.checkboxLabel}></label>
        </div>
        <Button onClick={handleStart}>Играть</Button>
        <Link to="/leaderboard" className={styles.leaderLink}>
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
