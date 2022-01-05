import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Exam from "./pages/Exam";
import Result from "./pages/Result";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/result" exact={true} component={Result}/>
                    <Route path="/exam" component={Exam}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
