import throwResult from "./throwResult";

export default interface rollsPanelTypes {
    errorStatus: boolean,
    errorMessage: string,
    scoreboard: throwResult[]
}