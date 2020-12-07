import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Display = props => {
    
    const[person, setPerson]=useState({});
    const[planet, setPlanet]=useState({});
    const[isError, setError]=useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.category}/${props.id}`)
        .then(res => {
            console.log(res);
            if(props.category === "people"){
                setPerson(res.data);
            } else if(props.category === "planets"){
                setPlanet(res.data);
                setError(false);
            }
            
        }).catch(err => {
            if (err.response && err.response.status=== 404){
                console.log(err.response.status)
                setError(true);
            } else {
                console.log(err);
            }
        });
    },[props]);

    

    return(
        <div className="card">
            { props.category === 'people' && !isError ? 
            <div className="card-body">
            <h2>{person.name}</h2>
            <p>Height: {person.height}<br/>
            Mass: {person.mass}<br/>
            Hair Color: {person.hair_color}<br/>
            Skin Color: {person.skin_color}</p>
            </div> : ''}
            { props.category === 'planets' && !isError? 
            <div className="card-body">
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}<br/>
            Terrain: {planet.terrain}<br/>
            Surface Water: {planet.surface_water}<br/>
            Population: {planet.population}</p>
            </div> : ''}
            <div className="card-body">
            { isError ? <p>These aren't the droids you're looking for</p>: ''}
            </div>
        </div>
    )
}
export default Display;