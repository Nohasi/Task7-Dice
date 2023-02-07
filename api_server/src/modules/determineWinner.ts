import coinflipResult from "../types/coinflipResult";

export const determineWinner = (flips: number, flippedCoins: coinflipResult[]): string => {
    let winCounter = 0;

    // for each win the user has, we add to the counter
    flippedCoins.forEach((coin) => {
        if(coin.result){
            winCounter++;
        }
    })

    // if player wins over half of flips, they win the game.
    let winThreshold = flips / 2;
    if(winCounter > (winThreshold)){
        return 'win';
    }
    if(winCounter < (winThreshold)){
        return 'lose';
    }
    // If win=lose, it's a draw (can only occur with even # of flips)
    return 'draw';
}