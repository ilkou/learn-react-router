import React, {useState, useEffect} from 'react';
import './App.css';
import {trackPromise} from "react-promise-tracker";

function ItemDetails({ match }) {
    const [item, setItem] = useState({
        images: {}
    });

    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch(`https://fortniteapi.io/items/get?id=${match.params.id}`, {
                method: 'GET',
                headers: new Headers({
                    Authorization: 'f92de23b-37e50450-eb20d604-4c92c60c',
                })
            });

            const dataJson = await data.json();
            console.log(dataJson);
            if (dataJson.result === false)
                setItem({name: "", images: {background: "https://www.itxchange.com/W0RdPr355/wp-content/uploads/2019/01/404-error.png"}});
            else
                setItem(dataJson.item);
        };
        trackPromise(fetchItems());
    }, [match.params.id]);
    return (
        <div className="App">
            <h1>{item.name}</h1>
            <img src={item.images.background} alt={item.name} style={{maxWidth: "80%" }}/>
        </div>
    );
}

export default ItemDetails;
