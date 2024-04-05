    // import React from 'react'
    // import './CSS/LoginSignup.css'
    // import { useState } from 'react'
    // export const LoginSignup = () => {

    //     const [state, setState] = useState("Login");
    //     const [formData, setFormData] = useState({
    //         username: "",
    //         password: "",
    //         email: ""
    //     })
    //     const changeHandler = (e) => {
    //         setFormData({ ...formData, [e.target.name]: e.target.value })
    //     }
    //     const login = async (event) => {
    //         event.preventDefault();
    //         event.target.reportValidity();
    //         console.log("Login FUnction Executed", formData);
    //         let responseData;
    //         await fetch('http://localhost:3000/login', {
    //             method: 'POST',
    //             header: {
    //                 Accept: 'application/form-data',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         }).then((response) => response.json()).then((data) => responseData = data)
    //         if (responseData.success) {
    //             localStorage.setItem('auth-token', responseData.token);
    //             window.location.replace("/");
    //         }
    //         else {
    //             alert(responseData.errors)
    //         }
    //     }
    //     const signup = async (event) => {
    //         event.preventDefault();
    //         event.target.reportValidity();
    //         console.log("Sign up FUnction Executed", formData);
    //         let responseData;
    //         await fetch('http://localhost:3000/signup', {
    //             method: 'POST',
    //             header: {
    //                 Accept: 'application/form-data',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         }).then((response) => response.json()).then((data) => responseData = data)
    //         if (responseData.success) {
    //             localStorage.setItem('auth-token', responseData.token);
    //             window.location.replace("/");
    //         }
    //         else {
    //             alert(responseData.errors)
    //         }
    //     }
    //     return (
    //         <div className="loginsignup">
    //             <div className="loginsignup-container">
    //                 <h1>{state}</h1>
    //                 <div className="loginsignup-fields">
    //                     {state === "Sign Up" ? <input required name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
    //                     <input required name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
    //                     <input required name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
    //                 </div>
    //                 <button onClick={(event) => { state === "Login" ? login(event) : signup(event) }}>Continue</button>
    //                 {state === "Sign Up" ? <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login Here</span></p> : <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click Here</span></p>
    //                 }
    //                 <div className="loginsignup-agree">
    //                     <input type="checkbox" name='' id='' />
    //                     <p>I agree to the terms of use & privacy policy.</p>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }
    // export default LoginSignup
    import React, { useState } from 'react';
    import './CSS/LoginSignup.css';

    export const LoginSignup = () => {
        const [state, setState] = useState("Login");
        const [formData, setFormData] = useState({
            username: "",
            password: "",
            email: ""
        });

        const changeHandler = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const login = async () => {
            console.log("Login Function Executed", formData);
            let responseData;
            await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => responseData = data);

            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace("/");
            } else {
                alert(responseData.errors);
            }
        };

        const signup = async () => {
            console.log("Sign up Function Executed", formData);
            let responseData;
            await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => responseData = data);

            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace("/");
            } else {
                alert(responseData.errors);
            }
        };

        return (
            <div className="loginsignup">
                <form className="loginsignup-container"
                onSubmit={(event) => {
                    event.preventDefault();
                    event.target.reportValidity();
                    state === "Login" ? login() : signup();
                }}
                >
                    <h1>{state}</h1>
                    <div className="loginsignup-fields">
                        {state === "Sign Up" && (
                            <input
                                required
                                name='username'
                                value={formData.username}
                                onChange={changeHandler}
                                type="text"
                                placeholder='Your Name'
                            />
                        )}
                        <input 
                        required 
                        name='email' 
                        value={formData.email} 
                        onChange={changeHandler} 
                        type="email" 
                        placeholder='Email Address' 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" 
                        title="Please enter a valid email address" 
                    />

                        <input
                            required
                            name='password'
                            value={formData.password}
                            onChange={changeHandler}
                            type="password"
                            placeholder='Password'
                        />
                    </div>
                    <button type ="submit" 
                    // onClick={(event) => {
                    //     event.preventDefault();
                    //     event.target.reportValidity();
                    //     state === "Login" ? login() : signup();
                    // }}
                    >Continue</button>
                    {state === "Sign Up" ? (
                        <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login Here</span></p>
                    ) : (
                        <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Sign Up") }}>Click Here</span></p>
                    )}
                    <div className="loginsignup-agree">
                        <input type="checkbox" name='' id='' />
                        <p>I agree to the terms of use & privacy policy.</p>
                    </div>
                </form>
            </div>
        );
    };

    export default LoginSignup;
