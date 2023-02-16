import throwResult from "./diceResults";

export default interface rollsPanelTypes {
    errorStatus: boolean,
    errorMessage: string,
    scoreboard: throwResult[]
}