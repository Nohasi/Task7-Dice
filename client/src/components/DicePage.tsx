import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { DiceForm } from './DiceForm';
import { Header } from './Header';
import { ResultPanel } from './ResultPanel';
import { RollsPanel } from './RollsPanel';

export const DicePage = () => {

    // TODO: Set States

    return(
        <div className="App">
            <Header/>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <DiceForm/>
                    </div>
                    <div className="col-md-4">
                        <ResultPanel/>
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                <RollsPanel/>
            </div>
        </div>
    );   
}