import { createContext, useState } from "react";

export const GameModeContext = createContext(false);

export function EasyGameMode({ children }) {
  const [isEasyMode, setIsEasyMode] = useState(false);

  return <GameModeContext.Provider value={{ isEasyMode, setIsEasyMode }}>{children}</GameModeContext.Provider>;
}
