export default interface formTypes {
    setResultSide: React.Dispatch<React.SetStateAction<string>>
    setResult: React.Dispatch<React.SetStateAction<string>>,
    setRounds: React.Dispatch<React.SetStateAction<never[]>>,
    setPageInteraction: React.Dispatch<React.SetStateAction<boolean>>
    setErrorStatus: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
    setNumOfHeads: React.Dispatch<React.SetStateAction<number>>
    setNumOfTails: React.Dispatch<React.SetStateAction<number>>
}