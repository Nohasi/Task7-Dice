import React, { useState } from "react";
import formTypes from "../prop_types/formTypes";
import { getDiceResults } from "../services/getDiceResults";

export const DiceForm = (props: formTypes) => {

    // Handlers for the dropdowns
    const handleDiceSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.setDice(Number(event.target.value));
    }
    const handleThrowsSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.setThrows(Number(event.target.value));
    }
    const handlePlayersSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.setPlayers(Number(event.target.value));
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        // Calls fetch service
        const response = await getDiceResults(props.dice, props.throws, props.players);
        // if valid, sets output states and makes errorStatus false
        if(response.status === 200){
            props.setResult(response.result.result);
            // If we have a single winner, we set the winner state
            if(response.result.result === 'win'){
                props.setWinner(response.result.winner);
            }
            // Else we have multiple and set the tied players state
            else if(response.result.result === 'tie'){
                props.setTiedPlayers(response.result.tiedPlayers);
            }
            props.setScore(response.result.score);
            props.setScoreboard(response.throws);

            props.setPageInteraction(true);
            props.setErrorStatus(false);
            props.setErrorMessage('');
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
                    <h2>Select number of Dice, Flips, and Players</h2>
                    <form>
                        <div className="row">
                            <div className="col">
                                <label>
                                    Dice
                                    &nbsp;
                                    <select value={props.dice} onChange={handleDiceSelect}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </label>
                            </div>
                            <div className="col">
                                <label>
                                    Throws
                                    &nbsp;
                                    <select value={props.throws} onChange={handleThrowsSelect}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </label>
                            </div>
                            <div className="col">
                                <label>
                                    Players
                                    &nbsp;
                                    <select value={props.players} onChange={handlePlayersSelect}>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: "10px"}}>
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Play!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );    
}