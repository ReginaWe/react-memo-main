import React, { useState } from "react";


export const gameModeContext = React.createContext(null)

export const EasyGameMode ({children}) {
    const [easyMode, setEasyMode] = useState(false);

    function openEasyMode() {
        setEasyMode((easyMode) => !easyMode)
    }

    return <gameModeContext.Provider value={{easyMode, openEasyMode}}>{children}</gameModeContext.Provider>
}

export default EasyGameMode