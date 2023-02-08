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
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setResult: React.Dispatch<React.SetStateAction<string>>,
    setWinner: React.Dispatch<React.SetStateAction<number>>,
    setTiedPlayers: React.Dispatch<React.SetStateAction<never[]>>,
    setScoreboard: React.Dispatch<React.SetStateAction<never[]>>,
    setScore: React.Dispatch<React.SetStateAction<number>>
}