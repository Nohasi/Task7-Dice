import throwResult from "../prop_types/throwResult"

export const buildTableBody = (scoreboard: throwResult[]) => {
    const mapped = scoreboard.map((val, key) => {
        return(
            <tr key={key}>
                <td>{val.player}</td>
                <td>{val.score}</td>
            </tr>
        )
    })

    return(
        <div>
            {mapped}
        </div>

    );
}