import throwResult from "../types/throwResult";

export const determineWinner = (results: throwResult[]) => {
    // Set to store players in case of a tie
    let tiedPlayers = new Set<number>();

    // Stores the highest number value and the player who has that value
    let winnerPlayer = 0;
    let winnerScore = 0;

    results.forEach((result) => {
        // If new maximum value is found, clear set and update variables
        if(result.score > winnerScore){
            tiedPlayers.clear();
            winnerPlayer = result.player;
            winnerScore = result.score;
        }
        // if multiple players have the highest value, add them to the set
        else if(result.score === winnerScore){
            tiedPlayers.add(winnerPlayer);
            tiedPlayers.add(result.player);
        }
    });

    // If the set is empty, we have one winner
    if(tiedPlayers.size === 0){
        return {result: 'win', winner: winnerPlayer, score: winnerScore};
    }
    // Else we have a tie, and we output all tied players instead
    return {result: 'tie', tiedPlayers: Array.from(tiedPlayers), score: winnerScore};
}