import React from "react";
import { Link } from "react-router-dom";
import './reservation.scss';

export const Reservation= () =>{

    const bookFlight = () => {

    }
    
    return(
    <>
    <h2>Passenger Details</h2>
    <div className="pname">
        <div className="text">name :</div>
        <input className="input-name" type={"text"}></input>
    </div>
    <div className="gender">
        <div className="text">Gender :</div>
        <input className="input-gender" type={"text"}></input>
    </div>
    <div className="age">
        <div className="text">Age :</div>
        <input className="input-age" type={"number"}></input>
    </div>

    <h2>Payment Details</h2>
    <div className="card">
        <div className="text">Card :</div>
        <input className="input-card" type={"number"}></input>
    </div>
    <div className="card-name">
        <div className="text">Name :</div>
        <input className="input-card-name" type={"text"}></input>
    </div>
    <div className="card-cvv">
        <div className="text">CVV :</div>
        <input className="input-card-cvv" type={"text"}></input>
    </div>
    <div className="card-expiry">
        <div className="text">CVV :</div>
        <input className="input-card-expiry" type={"text"}></input>
    </div>
    <Link to={"/success"}><button className="book" onClick={bookFlight}>BOOK</button></Link>
    <button className="info">Flight Information</button>
    </>
    );
}