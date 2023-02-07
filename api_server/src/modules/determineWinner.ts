import throwResult from "../types/throwResult";

export const determineWinner = (results: throwResult[]) => {
    let tiedPlayers = new Set<number>();
    let winnerPlayer = 0;
    let winnerScore = 0;

    results.forEach((result) => {
        if(result.score > winnerScore){
            tiedPlayers.clear();
            winnerPlayer = result.player;
            winnerScore = result.score;
        }
        else if(result.score === winnerScore){
            tiedPlayers.add(winnerPlayer);
            tiedPlayers.add(result.player);
        }
    });
    if(tiedPlayers.size === 0){
        return {result: 'win', winner: winnerPlayer, score: winnerScore};
    }
    else {
        let tiedString = '';
        tiedPlayers.forEach((player) => {
            tiedString += `${player}, `;
        })
        return {result: 'tie', tiedPlayers: Array.from(tiedPlayers), score: winnerScore};
    }
}