import React from "react";
import resultPanelTypes from "../prop_types/resultPanelTypes";

export const ResultPanel = (props: resultPanelTypes) => {
    let outputString = '';

    // if errorStatus is true, displays the word "Error"
    if(props.errorStatus){
        outputString = 'Error';
    }
    else{
        let capitalSide = props.resultSide.charAt(0).toUpperCase() + props.resultSide.slice(1);
        // Capitalizing the first letter of "win" or "lose" so it looks nicer :D
        outputString = `${capitalSide}: ${props.result.charAt(0).toUpperCase() + props.result.slice(1)}`;
        console.log(outputString);
    }
    return(
        <div style={{backgroundColor:'#ee6b6e'}} className="display-board">
            <h4 style={{color: 'black'}}>Result:</h4>
            <div className="result">
                {outputString}
            </div>
        </div>
    );
}