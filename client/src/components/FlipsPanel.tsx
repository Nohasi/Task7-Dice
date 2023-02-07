import React from "react";
import flipsPanelTypes from "../prop_types/flipsPanelTypes";
import { ErrorMessage } from "./ErrorMessage";
import { FlipsTable } from "./FlipsTable";

export const FlipsPanel = (props: flipsPanelTypes) => {
    return(
        <div className="container">
            { props.errorStatus 
            // If errorStatus is true, calls ErrorMessage component instead of building table
              ? <ErrorMessage errorMessage={props.errorMessage} />
              : <FlipsTable 
                  rounds={props.rounds} 
                  numOfHeads={props.numOfHeads}
                  numOfTails={props.numOfTails}
                />
            }
        </div>
    );
}