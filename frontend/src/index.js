import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
//import App from "./landing-page/App";
//import App from "./home-page/App";
//import App from "./events-page/App";

import App from "./club-page/App";
//import App from "./form-page/App";
=======
>>>>>>> 8a152829470695371638718971ba7e8563c87ac5

import Routes from './Routes';

class App extends Component{
    render() {
        return (
                <div className="App">
                    <Routes/>
                </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));