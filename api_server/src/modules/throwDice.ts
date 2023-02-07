import throwResult from "../types/throwResult";
import { playerResult } from "./playerResult";

export const throwDice = (dice: number, throws: number, players: number): throwResult[] => {
    let resultsContainer = [];
    // Finds player's result for each player
    for(let i = 1; i <= players; i++) {
        resultsContainer.push(playerResult(i, dice, throws));
    }
    return resultsContainer;
}