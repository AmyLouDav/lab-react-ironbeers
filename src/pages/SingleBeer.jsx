import React from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SingleBeer(){
    const [beer, setBeer] = useState([]);
    const { id: beerId } = useParams()
    useEffect(() => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => {
            setBeer(response.data)
        })
        .catch(console.log)
    }, [beerId])
   
    return (
        <div>
            <Header />
                <div key={beer._id}>
                    <img className="beer-image-single" src={beer.image_url} alt="beer" />
                    <div className="card">
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <p>{beer.first_brewed}</p>
                        <p>{beer.attenuation_level}</p>
                        <p>{beer.description}</p>
                        <p>{beer.contributed_by}</p>
                     </div>
                </div>
        </div>
    )
}
