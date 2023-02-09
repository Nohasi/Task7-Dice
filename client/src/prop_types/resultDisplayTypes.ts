export default interface resultDisplayTypes{
    result: string,
    winner: number,
    tiedPlayers: Array<number>,
    score: number
    setColor: React.Dispatch<React.SetStateAction<string>>
}