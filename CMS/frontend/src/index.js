import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
ReactDOM.render(
    <Router>
        <div className="App">
            <Routes/>
        </div>
    </Router>,
    document.getElementById('root')
);
