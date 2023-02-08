import React from "react";
import resultPanelTypes from "../prop_types/resultPanelTypes";
import { ErrorResult } from "./ErrorResult";
import { ResultDisplay } from "./ResultDisplay";

export const ResultPanel = (props: resultPanelTypes) => {

    return(
        <div style={{backgroundColor:'#4fb9af'}} className="display-board">
            {props.errorStatus
            ? <ErrorResult/>
            : <ResultDisplay
                result={props.result}
                winner={props.winner}
                tiedPlayers={props.tiedPlayers}
                score={props.score}
              /> 
            }
        </div>
    );
}