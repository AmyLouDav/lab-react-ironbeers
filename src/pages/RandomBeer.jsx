import React from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState([]);
    const { id: randomBeerId } = useParams()
    
    useEffect(() => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => {
            setRandomBeer(response.data)
        })
        .catch(console.log)
    }, [randomBeerId])
   
    return (
        <div>
            <Header />
                <div key={randomBeer._id}>
                    <img className="beer-image-single" src={randomBeer.image_url} alt="beer" />
                    <div className="card">
                        <h2>{randomBeer.name}</h2>
                        <h3>{randomBeer.tagline}</h3>
                        <p>{randomBeer.first_brewed}</p>
                        <p>{randomBeer.attenuation_level}</p>
                        <p>{randomBeer.description}</p>
                        <p>{randomBeer.contributed_by}</p>
                     </div>
                </div>
        </div>
    )
}