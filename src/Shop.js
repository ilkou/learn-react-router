import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Shop() {
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://fortniteapi.io/items/list?lang=en', {
            method: 'GET',
            headers: new Headers({
                Authorization: 'f92de23b-37e50450-eb20d604-4c92c60c',
            })
        });
        const dataJson = await data.json();
        console.log(dataJson.items);
        setItems(Object.keys(dataJson.items));
    };

    useEffect(() => {
        fetchItems();
    }, []);
    return (
        <div className="App">
            {items.map(item => (
                <Link key={item} to={`/shop/${item}`}>
                    <h2>{item}</h2>
                </Link>
            ))}
        </div>
    );
}

export default Shop;
