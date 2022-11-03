import React from "react";
import { Link } from "react-router-dom";
import './flightCard.scss';

export const FlightCard= () => {
    return(
        <>
        <div className="flight-list-items">
            <div className="details">
                <div>Flight Name</div>
                <div>Arrival</div>
                <div>Departure</div>
            </div>
            <Link to={"/reservation"}><button>BOOK</button></Link>
        </div>
        </>
    );
}