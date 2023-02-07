import React, { useState } from "react";
import formTypes from "../prop_types/formTypes";
import { getCoinflipResult } from "../services/getCoinflipResult";

export const DiceForm = () => {

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
                                    <select>
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
                                    Flips
                                    &nbsp;
                                    <select>
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
                                    <select>
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
                        </div>
                        <div className="row" style={{paddingTop: "10px"}}>
                            <button type="submit" className="btn btn-primary">Play!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );    
}