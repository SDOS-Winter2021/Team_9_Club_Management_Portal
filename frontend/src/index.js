import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
//import App from "./landing-page/App";
//import App from "./home-page/App";
//import App from "./events-page/App";
import App from "./club-page/App";
//import App from "./form-page/App";

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
