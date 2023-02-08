import React from "react";

export default interface formTypes {
    dice: number,
    throws: number,
    players: number,
    setDice: React.Dispatch<React.SetStateAction<number>>,
    setThrows: React.Dispatch<React.SetStateAction<number>>,
    setPlayers: React.Dispatch<React.SetStateAction<number>>,
    setPageInteraction: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorStatus: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}