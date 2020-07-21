import React from 'react';
import './App.css';
import Nav from "./Nav";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Shop from "./Shop";
import About from "./About";
import Item from "./Item";
import ItemDetails from "./ItemDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/shop" exact component={Shop}/>
                    <Route path="/shop/:item" exact component={Item}/>
                    <Route path="/shop/:item/:id" component={ItemDetails}/>
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
