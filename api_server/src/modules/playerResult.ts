import throwResult from "../types/throwResult";

export const playerResult = (playerNo: number, dice: number, throws: number): throwResult => {
    let score = 0;
    for(let j = 0; j < dice; j++) {
        for(let k = 0; k < throws; k++){
            score += Math.floor((Math.random() * 6) + 1);
        }
    }
    return {player: playerNo, score: score};
}