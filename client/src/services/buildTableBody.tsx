import diceResults from "../prop_types/diceResults"

export const buildTableBody = (scoreboard: diceResults[]) => {
    // Checking if array sent is empty
    if(scoreboard.length === 0){
        return(
            [
            <tr key={0}>
                <td>Empty array passed</td>
                <td>Empty array passed</td>
            </tr>]
        )
    }

    return scoreboard.map((val, key) => {
        return(
            <tr key={key}>
                <td>{val.player}</td>
                <td>{val.score}</td>
            </tr>
        )
    })
}