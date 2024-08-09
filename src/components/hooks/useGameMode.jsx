import { useContext } from "react";
import { GameModeContext } from "../context/gameModeContext";

export function useGameMode() {
  return useContext(GameModeContext);
}
