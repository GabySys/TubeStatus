import StatusList from './components/StatusList';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

    const [lines, setLines] = useState();

    const getLineStatus = async () => {
        const key = process.env.REACT_APP_KEY;

        const response = await fetch(
            "http://api.tfl.gov.uk/Line/Mode/Tube/Status?app_key=" + key
        ).then((response) => response.json()).catch((err) => {
            console.log(err.message);
        });

        setLines(response);
    };
    useEffect(() => {
        getLineStatus();
    }, []);

    return (
        <div className="App">
            <div>
                <header className="App-header">
                    Status Board
                </header>
            </div>
            <StatusList lines={ lines }></StatusList>
        </div>
    );
}

export default App;
