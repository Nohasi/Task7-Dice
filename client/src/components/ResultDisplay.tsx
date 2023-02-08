import resultDisplayTypes from "../prop_types/resultDisplayTypes";

export const ResultDisplay = (props: resultDisplayTypes) => {
    // Flag to see if the result was a win or a tie
    let win = (props.result==="win")?true:false;

    // Title of result display changes based on a win or a tie
    let resultTitle = win?"Winner:":"Tied Players:";
    let outputString = '';
    if(win){
        outputString = `Player ${props.winner}`;
    }
    else {
        props.tiedPlayers.forEach((player) => {
            outputString += `${player}, `;
        });
        outputString = outputString.slice(0, -2);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h4 style={{color: 'black'}}>{resultTitle}</h4>
            <div className="result">
                <div>
                    {outputString}
                </div>
                <div>
                    {props.score} points
                </div>
            </div>
        </div>
    );
}