import roundTypes from "../prop_types/roundTypes"

export const buildTableBody = (rounds: roundTypes[]) => {
    return rounds.map((val, key) => {
        return(
            <tr key={key}>
                <td>{key+1}</td>
                <td>{val.target}</td>
                <td>{val.sideFlipped}</td>
                <td>{val.result?'Win':'Lose'}</td>
            </tr>
        )
    })
}