import { Request } from "express"
export const invalidRequest = (req: Request): string | null => {
    // Checking if parameter exists
    if(!('dice' in req.query)){
        return "The 'dice' parameter is not passed."
    }
    if(!('throws' in req.query)){
        return "The 'throws' parameter is not passed."
    }
    if(!('players' in req.query)){
        return "The 'players' parameter is not passed."
    }

    // Checking if passed parameter is empty
    if(req.query['dice'] === ""){
        return "No value was passed for 'dice'"
    }
    if(req.query['throws'] === ""){
        return "No value was passed for 'throws'"
    }
    if(req.query['players'] === ""){
        return "No value was passed for 'players'"
    }

    const diceNo = Number(req.query['dice']);
    const throwNo = Number(req.query['throws']);
    const playerNo = Number(req.query['players']);

    // Checking if passed params are not numbers
    if(isNaN(diceNo)){
        return "'dice' value should be a number";
    }
    if(isNaN(throwNo)){
        return "'throws' value should be a number";
    }
    if(isNaN(playerNo)){
        return "'players' value should be a number";
    }

    // Checking for low values
    if(diceNo <= 0){
        return "Number of dice cannot be zero or a negative number";
    }
    if(throwNo <= 0){
        return "Number of throws cannot be zero or a negative number";
    }
    if(playerNo < 2){
        return "Must have at least two players";
    }

    // Checking for floating point numbers
    if(!Number.isInteger(diceNo)){
        return "Number of dice must be an integer";
    }
    if(!Number.isInteger(throwNo)){
        return "Number of throws must be an integer";
    }
    if(!Number.isInteger(playerNo)){
        return "Number of players must be an integer";
    }

    // Adding max value for params
    if(diceNo > 5){
        return "Number of dice must not be larger than 5";
    }
    if(throwNo > 10){
        return "Number of throws must not be larger than 10";
    }
    if(playerNo > 10){
        return "Number of players must not be larger than 10";
    }


    return null;
}