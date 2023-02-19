import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css"
function Dlogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    const history=useHistory();
    function handleSubmit() {
        if (email.trim().length === 0 && password.trim.length === 0) {
            setEmailErr(true)
            setPasswordErr(true)
        } else {
            setEmailErr(false)
            setPasswordErr(false)
            history.push('/navbar');
        }
    }
    return (
        <div id="form2">
            <h1>Login</h1>
            <div id="form">
                <form onSubmit={handleSubmit}>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br></br>
                    {emailErr && <p>Please enter your mail</p>}
                    <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br></br>
                    {passwordErr && <p>Please enter your correct password</p>}
                    <button onSubmit={handleSubmit} id="sbtn">Login</button>
                </form>

            </div>

        </div>

    )
}
export default Dlogin