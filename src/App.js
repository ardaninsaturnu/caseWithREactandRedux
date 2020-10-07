import React from 'react';
import './App.css';
import List from  './pages/List/List';
import Header from './pages/Header/Header';
import AddLink from "./pages/AddPage/Add";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {

    return (



        <Router>

                <Header/>
                <hr/>


                <Switch>

                    <Route exact path="/" component={List}/>
                    <Route path="/addForm" component={AddLink}/>


                </Switch>



        </Router>







);
}

export default App;
