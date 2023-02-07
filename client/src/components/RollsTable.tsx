import React from "react";
import roundTypes from "../prop_types/roundTypes";
import tableTypes from "../prop_types/tableTypes";
import { buildTableBody } from "../services/buildTableBody";

export const RollsTable = () => {
    
    return (
        <div className="container">
        <table className="table table-bordered table-fixed table-sm same-col-widths">
            <thead>
            {/* Styling to make all columns the same width */}
            <tr className="same-col-widths">
                <th>Round No.</th>
                <th>Target</th>
                <th>Side Flipped</th>
                <th>Result</th>    
            </tr>
            </thead>
            <tbody>
                {/* Calling function to map each round to a row */}
                {/* {buildTableBody(props.rounds)} */}
            </tbody>
        </table>
    </div>
    );
}