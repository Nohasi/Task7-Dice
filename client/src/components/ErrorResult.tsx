export const ErrorResult = ({setColor}: {setColor:React.Dispatch<React.SetStateAction<string>>}) => {

    setColor("#ee6b6e");

    return(
        <div>
            <div className="result">
                Error
            </div>
        </div>
    );
}