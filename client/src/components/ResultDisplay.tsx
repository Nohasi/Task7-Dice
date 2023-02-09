import resultDisplayTypes from "../prop_types/resultDisplayTypes";

export const ResultDisplay = (props: resultDisplayTypes) => {
    // Flag to see if the result was a win or a tie
    let win = (props.result==="win")?true:false;

    // Title of result display changes based on a win or a tie
    let resultTitle = win?"Winner:":"Tied Players:";
    let outputString = '';

    // In case of a win, we display the winner's player number
    if(win){
        outputString = `Player ${props.winner}`;
        props.setColor("#50C878");
    }
    // else we list all the tied players
    else { 
        props.tiedPlayers.forEach((player) => {
            outputString += `${player}, `;
        });
        // to remove the excess comma and space that will be at the end
        outputString = outputString.slice(0, -2);
        props.setColor("#C9CC3F");
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