import React, { useState } from "react";
import formTypes from "../prop_types/formTypes";
import { getCoinflipResult } from "../services/getCoinflipResult";

export const CoinflipForm = (props: formTypes) => {

    // Input States
    let [flips, setFlips] = useState('');
    let [side, setSide] = useState('heads');

    // Handles radio button selection
    const radioButtonSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSide(event.target.value);
    }

    // Changes flips value on text change
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Validation to make sure only numbers go through
        if(event.target.validity.valid){
            setFlips(event.target.value);
        }
    }


    const getResult = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        // Calls fetch service
        const response = await getCoinflipResult(flips, side);
        // if valid, sets output states and makes errorStatus false
        if(response.status === 200){
            props.setResult(response.result);
            props.setRounds(response.flips.resultsContainer);
            props.setNumOfHeads(response.numOfHeads)
            props.setNumOfTails(response.numOfTails)
            props.setPageInteraction(true);
            props.setErrorStatus(false);
            props.setErrorMessage('');
            props.setResultSide(side);
        }
        else { // if invalid, sets errorMessage and makes errorStatus true
            props.setPageInteraction(true);
            props.setErrorStatus(true);
            props.setErrorMessage(response.error);
            console.log(`Error: ${response.error}`);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Enter Number of flips & choose desired side</h2>
                    <form>
                        <div className="row">
                            <div className="col">
                                <input 
                                    type="text"
                                    pattern="[0-9]*"
                                    value={flips}
                                    onChange={handleTextChange}
                                    placeholder="Enter Number of Flips" 
                                />
                            </div>
                            <div className="col">
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="heads"
                                         onChange={radioButtonSelect}
                                         checked={side === "heads"}
                                        />
                                        Heads
                                    </label>
                                    &nbsp;&nbsp;&nbsp;
                                    <label>
                                        <input type="radio" value="tails" 
                                         onChange={radioButtonSelect}
                                         checked={side === "tails"}
                                        />
                                        Tails
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "10px"}}>
                            <button type="submit" onClick={getResult} className="btn btn-danger">Flip the coin!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );    
}