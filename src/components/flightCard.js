import React from "react";
import { Link } from "react-router-dom";
import './flightCard.scss';

export const FlightCard= (props) => {
    console.log(props);
    return(
        <>
        <div className="flight-list-items">
            <div className="details">
                <div>Flight Number: {props?.item?.flightNumber}</div>
                <div>Operating Airlines: {props?.item?.operatingAirlines}</div>
                <div>Arrival City: {props?.item?.arrivalCity}</div>
                <div>Departure City: {props?.item?.departureCity}</div>
                <div>Date: {props?.item?.dateOfDeparture}</div>
                <div>Time: {props?.item?.estimatedDepartureTime}</div>
            </div>
            <Link to={`/reservation?flightnumber=${props?.item?.flightNumber}`}><button>BOOK</button></Link>
        </div>
        </>
    );
}