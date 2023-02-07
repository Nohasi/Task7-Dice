import throwResult from "../types/throwResult";

export const determineWinner = (results: throwResult[]) => {
    let winnerPlayer = results[0].player;
    let winnerScore = results[0].score;

    results.forEach((result) => {
        if(result.score > winnerScore){
            winnerPlayer = result.player;
            winnerScore = result.score;
        }
    });

    return {winner: winnerPlayer, score: winnerScore};
}