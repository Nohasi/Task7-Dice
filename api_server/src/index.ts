import { invalidRequest } from "./modules/invalidRequest";

import express = require('express');
import { throwDice } from "./modules/throwDice";
import { determineWinner } from "./modules/determineWinner";

const app = express();

app.use(express.json());
// 3 params: dice, throws, players
app.get('/dice', (req: express.Request, res: express.Response) => {
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

    let thrownDice = throwDice(Number(req.query['dice']), Number(req.query['throws']), Number(req.query['players']));
    let winner = determineWinner(thrownDice);
    res.status(200);
    res.send({
        status: 200,
        result: winner,
        throws: thrownDice
    });
});

const port: number = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = server;