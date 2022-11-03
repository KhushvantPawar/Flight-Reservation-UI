import React, { useState } from "react";
import "./login.scss";

export const Login = () => {

    // let name = 'fadfafad';
    const [name, setName] = useState();
    const [pass, setPass] = useState();

    const handleChange = (event) => {

        if (event.target.className === "input-username") {
            // name = event.targe.value;
            setName(event.target.value);
            // console.log(name);
        }
        else if (event.target.className === "input-password") {
            setPass(event.target.value);
            // console.log(pass);
        }
    }

    const loginSubmit = () => {
        console.log(name, pass);
        // API Call
        // async 
        // await
    }


    return (
        <>
            <div className="login">
                <div className="username">
                    <div className="text">Username :</div>
                    <input className="input-username" type="text" onChange={handleChange}></input>
                </div>
                <div className="password">
                    <div className="text">Password :</div>
                    <input className="input-password" type="password" onChange={handleChange}></input>
                </div>
                <button className="login-button" onClick={loginSubmit}>Login</button>
            </div>
        </>
    );
}

// class A {
//     private int a;
//     public int getA() {
//         return this.a;
//     }
//     public setA(int a) {
//         this.a = a;
//     }
// }
