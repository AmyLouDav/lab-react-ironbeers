import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function ListBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <Header />
      <h1>List of Beers</h1>
      {beers.map((beer) => (
        <div key={beer._id} className="card">
        <Link to={`/beers/${beer._id}`}>
          <img className="beer-image" src={beer.image_url} alt="beer" />
          </Link>
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>Created by: {beer.contributed_by}</p>
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  )
}
