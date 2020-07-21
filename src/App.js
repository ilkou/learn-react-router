import React from 'react';
import './App.css';
import Nav from "./Nav";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Shop from "./Shop";
import About from "./About";
import Item from "./Item";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/shop" exact component={Shop}/>
                    <Route path="/shop/:item" component={Item}/>
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <h1>List items</h1>
        <h2>List all cosmetic items: </h2>skins, backpacks, emotes, pickaxes, sprays, etc.
    </div>
);

export default App;
