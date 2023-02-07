import { invalidRequest } from "./modules/invalidRequest";

import express = require('express');
import { flipCoins } from "./modules/flipCoins";
import { determineWinner } from "./modules/determineWinner";

const app = express();

app.use(express.json());

app.get('/coinflip', (req: express.Request, res: express.Response) => {
    let errorMessage: string | null = invalidRequest(req);
    // not null: an error exists, hence is returned
    if(errorMessage != null){
        res.status(406);
        res.send({
            status: 406,
            error: errorMessage
        })
        return;
    }

    // number of heads and tails, and an array of individual flips and their results (win or lose)
    let flippedCoins = flipCoins(Number(req.query['flips']), String(req.query['side']));

    res.status(200);
    res.send({
        status: 200,
        numOfHeads: flippedCoins.headsCount,
        numOfTails: flippedCoins.tailsCount,
        result: determineWinner(Number(req.query['flips']), flippedCoins.resultsContainer),
        flips: flippedCoins,
    });
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;