import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Exam from "./pages/Exam";
import Question from "./pages/Question";
import Result from "./pages/Result";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/exam" exact={true} component={Exam}/>
                    <Route path="/question/:id" exact={true} component={Question}/>
                    <Route path="/result" exact={true} component={Result}/>
                    <Route path="*" exact={true} render={() => (<p>Page not found.</p>)}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
