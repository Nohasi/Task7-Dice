import React from "react";

export default interface formTypes {
    setPageInteraction: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorStatus: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
    setResult: React.Dispatch<React.SetStateAction<string>>,
    setWinner: React.Dispatch<React.SetStateAction<number>>,
    setTiedPlayers: React.Dispatch<React.SetStateAction<never[]>>,
    setScoreboard: React.Dispatch<React.SetStateAction<never[]>>,
    setScore: React.Dispatch<React.SetStateAction<number>>
}