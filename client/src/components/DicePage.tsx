import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { DiceForm } from './DiceForm';
import { Header } from './Header';
import { ResultPanel } from './ResultPanel';
import { RollsPanel } from './RollsPanel';

export const DicePage = () => {

    //OutputStates
    let [result, setResult] = useState('win');
    let [winner, setWinner] = useState(0);
    let [score, setScore] = useState(0);
    let [tiedPlayers, setTiedPlayers] = useState([]);
    let [scoreboard, setScoreboard] = useState([]);

    // Page/erorr handling states
    let [pageInteraction, setPageInteraction] = useState(false);
    let [errorStatus, setErrorStatus] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');

    return(
        <div className="App">
            <Header/>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <DiceForm
                            setPageInteraction={setPageInteraction}
                            setErrorStatus={setErrorStatus}
                            setErrorMessage={setErrorMessage}
                            setResult={setResult}
                            setWinner={setWinner}
                            setTiedPlayers={setTiedPlayers}
                            setScoreboard={setScoreboard}
                            setScore={setScore}
                        />
                    </div>
                    <div className="col-md-4">
                        { pageInteraction
                            ? <ResultPanel
                                errorStatus={errorStatus}
                                result={result}
                                winner={winner}
                                tiedPlayers={tiedPlayers}
                                score={score}
                            />
                            :<div/>
                        }
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                { pageInteraction
                    ? <RollsPanel
                        errorMessage={errorMessage}
                        errorStatus={errorStatus}
                        scoreboard={scoreboard}
                    />
                    : <div/>
                }
            </div>
        </div>
    );   
}