import React, { useState } from "react";
import './signup.scss';

export const Signup = () => {

    const [state, setState] = useState({});

    const handleChange = (event) => {

        if (event.target.className === "input-name") {
            setState({ ...state, name: event.target.value });
        }
        else if (event.target.className === "input-email") {
            setState({ ...state, email: event.target.value });
        }
        else if (event.target.className === "input-phone") {
            setState({ ...state, phone: event.target.value });
        }
        else if (event.target.className === "input-password") {
            setState({ ...state, password: event.target.value });
        }
        else {
            
            setState({ ...state, confirm_password: event.target.value });
        }
    }

    const signupSubmit = () => {
        console.log(state);
    }

    return (
        <>
            <div className="signup">
                <div className="name">
                    <div className="text">Username :</div>
                    <input className="input-name" type={"text"} onChange={handleChange}></input>
                </div>
                <div className="email">
                    <div className="text">Email :</div>
                    <input className="input-email" type={"text"} onChange={handleChange}></input>
                </div>
                <div className="phone">
                    <div className="text">Phone :</div>
                    <input className="input-phone" type={"number"} onChange={handleChange}></input>
                </div>
                <div className="password">
                    <div className="text">Password :</div>
                    <input className="input-password" type={"password"} onChange={handleChange}></input>
                </div>
                <div className="confirm-password">
                    <div className="text">Confirm Password :</div>
                    <input className="input-confirm-password" type={"password"} onChange={handleChange}></input>
                </div>
                <button className="signup" onClick={signupSubmit}>Sign up</button>
            </div>
        </>
    );
}