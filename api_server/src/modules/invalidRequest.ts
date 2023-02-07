import { Request } from "express"
export const invalidRequest = (req: Request): string | null => {

    // Checking for parameter existence
    if(!('flips' in req.query)){
        return 'The \'flips\' parameter is not passed';
    }
    if(!('side' in req.query)){
        return 'The \'side\' parameter is not passed';
    }

    //Checking for empty params
    if(req.query.flips === ""){
        return 'No value was passed for Number of Flips';
    }
    if(req.query.side === ""){
        return 'The \'side\' parameter is empty';
    }

    const flipNo = Number(req.query['flips']);

    // Checking if flips is not a number
    if(isNaN(flipNo)){
        return '\'flips\' should be passed as a number';
    }

    // Checking if flips is a negative or zero
    if(flipNo <= 0){
        return 'Number of flips cannot be zero or a negative number';
    }

    // Making sure number of flips is an whole number
    if(!Number.isInteger(flipNo)){
        return 'Number of flips must be an integer';
    }

    // Added a maximum value of 100 to num of flips
    if(flipNo > 100){
        return 'Number of flips must not be larger than 100';
    }

    // Checking if 'side' is neither heads/head nor tails/tail
    if(req.query['side'] !== 'heads' && req.query['side'] !== 'tails'){
        return '\'side\' should be either \'heads\' or \'tails\'';
    }

    return null;
}