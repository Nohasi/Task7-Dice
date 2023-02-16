import React from "react";
import diceResults from "../prop_types/diceResults";
import { buildTableBody } from "../services/buildTableBody";

export const RollsTable = ({scoreboard}: {scoreboard:diceResults[]}) => {
    return (
        <div className="container">
        <table className="table table-bordered table-fixed table-sm same-col-widths" style={{textAlign:"center"}}>
            <thead>
            {/* Styling to make all columns the same width */}
            <tr className="same-col-widths">
                <th>Player</th>
                <th>Score</th> 
            </tr>
            </thead>
            <tbody>
                {/* Calling function to map each round to a row */}
                {buildTableBody(scoreboard)}
            </tbody>
        </table>
    </div>
    );
}