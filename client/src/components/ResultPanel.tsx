import React, { useState } from "react";
import resultPanelTypes from "../prop_types/resultPanelTypes";
import { ErrorResult } from "./ErrorResult";
import { ResultDisplay } from "./ResultDisplay";

export const ResultPanel = (props: resultPanelTypes) => {
    let [color, setColor] = useState("#50C878");

    return(
        <div style={{backgroundColor: color}} className="display-board">
            {props.errorStatus
            ? <ErrorResult
                setColor={setColor}
              />
            : <ResultDisplay
                result={props.result}
                winner={props.winner}
                tiedPlayers={props.tiedPlayers}
                score={props.score}
                setColor={setColor}
              /> 
            }
        </div>
    );
}