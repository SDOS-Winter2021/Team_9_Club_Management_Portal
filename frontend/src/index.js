import React from "react";
import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

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