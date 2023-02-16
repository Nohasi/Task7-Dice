import diceResults from "./diceResults";

export default interface rollsPanelTypes {
    errorStatus: boolean,
    errorMessage: string,
    scoreboard: diceResults[]
}