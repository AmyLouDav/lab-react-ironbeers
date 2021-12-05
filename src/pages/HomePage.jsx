import React from 'react'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'



export default function HomePage() {
    return (
        <div className="home-page">
        
            <div>
                <img className="home-page-img" src={beers} alt="Beers" />
                <div className="text-container">
                <Link to="/beers" className="home-link">All Beers</Link>
                <p className="home-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div>
                <img className="home-page-img" src={randomBeer} alt="Random Beer" />
                <div className="text-container">
                <Link to="/random-beer" className="home-link">Random Beers</Link>
                <p className="home-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <div>
                <img className="home-page-img" src={newBeer} alt="New Beer" />
                <div className="text-container">
                <Link to="/new-beer" className="home-link">New Beers</Link>
                <p className="home-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </div>
    )
}
