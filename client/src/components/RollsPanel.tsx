import React from "react";
import flipsPanelTypes from "../prop_types/flipsPanelTypes";
import { ErrorMessage } from "./ErrorMessage";
import { RollsTable } from "./RollsTable";

export const RollsPanel = () => {
    return(
        <div className="container">
            { false 
            // If errorStatus is true, calls ErrorMessage component instead of building table
              ? <ErrorMessage errorMessage={"props.errorMessage"} />
              : <RollsTable/>
            }
        </div>
    );
}