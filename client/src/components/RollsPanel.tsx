import React from "react";
import { ErrorMessage } from "./ErrorMessage";
import { RollsTable } from "./RollsTable";
import rollsPanelTypes from "../prop_types/rollsPanelTypes";

export const RollsPanel = (props: rollsPanelTypes) => {
    return(
        <div className="container">
            { props.errorStatus
            // If errorStatus is true, calls ErrorMessage component instead of building table
              ? <ErrorMessage errorMessage={props.errorMessage} />
              : <RollsTable scoreboard={props.scoreboard}/>
            }
        </div>
    );
}