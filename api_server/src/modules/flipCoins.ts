import coinflipResult from "../types/coinflipResult";

export const flipCoins = (flips: number, side: string) => {
    let resultsContainer = [];
    let oneOrZero = 1;
    let [headsCount, tailsCount] = [0,0];

    // encoded heads as 1 and tails as 0
    let targetValue = (side==='tails')? 0 : 1;
    for(let i = 0; i < flips; i++){
        // expression to get either 0 or 1
        oneOrZero = (Math.random()>=0.5)? 1 : 0;

        // Incrementing headsCount or tailsCount based on oneOrZero value
        if(oneOrZero === 1){
            headsCount++;
        }
        else {
            tailsCount++
        }
        
        resultsContainer.push(
            {
                target: side,
                // returns the 'heads' or 'tails' string based on value
                sideFlipped: (oneOrZero === 1)? 'heads' : 'tails',
                result: (targetValue === oneOrZero)
            }
        );
    }

    return {headsCount: headsCount, tailsCount: tailsCount, resultsContainer: resultsContainer};
}