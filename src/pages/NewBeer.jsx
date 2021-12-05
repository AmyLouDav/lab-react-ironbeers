import React from 'react';
import Header from '../components/Header'
import { useState } from "react";
import axios from 'axios';

export default function NewBeer(props) {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(100)
    const [contributedBy, setContributedBy] = useState("")

    const handleNameInput = (e) => setName(e.target.value)
    const handleTaglineInput = (e) => setTagline(e.target.value)
    const handleDescriptionInput = (e) => setDescription(e.target.value)
    const handleFirstBrewedInput = (e) => setFirstBrewed(e.target.value)
    const handleBrewersTipsInput = (e) => setBrewersTips(e.target.value)
    const handleAttenuationLevelInput = (e) => setAttenuationLevel(e.target.value)
    const handleContributedByInput = (e) => setContributedBy(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        const addBeer = { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy};

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", addBeer)
            .then((response) => {
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setBrewersTips("");
                setAttenuationLevel("");
                setContributedBy("");
            })

        console.log("submitted", addBeer);
        // props.NewBeer(addBeer);

        }

    return (
        <div className="add-beer">
        <Header />
        <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleNameInput} />
  
          <label>Tagline:</label>
          <input type="text" name="tagline" value={tagline} onChange={handleTaglineInput} />
  
          <label>Description:</label>
          <input type="text" name="description" value={description} onChange={handleDescriptionInput} />
  
          <label>First Brewed:</label>
          <input type="text" name="firstBrewed" checked={firstBrewed} onChange={handleFirstBrewedInput} />

          <label>Brewers Tips:</label>
          <input type="text" name="brewersTips" checked={brewersTips} onChange={handleBrewersTipsInput} />

          <label>Attenuation Level:</label>
          <input type="number" name="attenuationLevel" checked={attenuationLevel} onChange={handleAttenuationLevelInput} />

          <label>Contributed By:</label>
          <input type="text" name="contributedBy" checked={contributedBy} onChange={handleContributedByInput} />
          
          <br />
          <br />
          <button type="submit">ADD NEW</button>
          </div>
        </form>
      </div>
    );
  }
