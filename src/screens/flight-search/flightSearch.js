import React, { useState } from "react";
import { FlightCard } from "../../components/flightCard";
import './flightSearch.scss';

export const Flight= () => {

    const [ flights , setFlights ] = useState({});

    const handleChange = (event) =>{

        if(event.target.className === "input-arrival"){
            setFlights({...flights, arrivalCity: event.target.value});
        }
        else if(event.target.className === "input-departure"){
            setFlights({...flights, departureCity: event.target.value});
        }
        else{
            setFlights({...flights, departureDate: event.target.value});
        }
    }

    const search= () => {
        console.log(flights);
        // API Call
        // flight Search
    }

    return(
        <>
        <h2>Flight Search</h2>
        <div className="arrival">
        <div className="text">Arrival City :</div>
        <input className="input-arrival" onChange={handleChange}></input>
        </div>
        <div className="departure">
        <div className="text">Departure City:</div>
        <input className="input-departure" onChange={handleChange}></input>
        </div>
        <div className="date">
        <div className="text">Date :</div>
        <input className="input-date" type={"date"} onChange={handleChange}></input>
        </div>
        <button className="search" onClick={search}>Search</button>
        <div className="flights"><FlightCard /></div>
        </>
    );
}