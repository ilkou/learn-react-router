import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from "react-router-dom";
import { trackPromise } from 'react-promise-tracker';

function Item({ match }) {
    const [item, setItem] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://fortniteapi.io/items/list?lang=en', {
            method: 'GET',
            headers: new Headers({
                Authorization: 'f92de23b-37e50450-eb20d604-4c92c60c',
            })
        });
        const dataJson = await data.json();
        //console.log(dataJson.items[match.params.item]);
        setItem(dataJson.items[match.params.item]);
    };

    useEffect(() => {
        trackPromise(fetchItems());
    }, []);
    return (
        <div className="App">
            {item.map(item => (
                <Link key={item.id} to={`/shop/${match.params.item}/${item.id}`}>
                    <h2 style={item.rarity === 'rare' ? {color: 'red'} : item.rarity === 'epic' ? {color: 'blue'} : {color: 'black'}}>{item.name}</h2>
                </Link>
            ))}
        </div>
    );
}

export default Item;
