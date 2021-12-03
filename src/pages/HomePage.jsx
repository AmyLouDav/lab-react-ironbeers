import React from 'react'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'



export default function HomePage() {
    return (
        <div className="home-page">
        
            <div className="home-link">
                <img src={beers} alt="Beers" />
                <Link to="/beers">All Beers</Link>
            </div>
            <div className="home-link">
                <img src={randomBeer} alt="Random Beer" />
                <Link to="/random-beers">Random Beers</Link>
            </div>
            <div className="home-link">
                <img src={newBeer} alt="New Beer" />
                <Link to="/new-beers">New Beers</Link>
            </div>
        </div>
    )
}
