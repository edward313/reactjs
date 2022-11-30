
import React, {  useEffect, useState } from 'react'
import { Fragment } from "react";
import { register } from "../actions/userActions";
import { useDispatch, useSelector } from 'react-redux'
function RegisterScreen() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()

        const action = register(email, password, name)
        console.log(action)
        dispatch(action)


    }
    return (
        <Fragment>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">

                        <form className="login" onSubmit={submitHandler} >
                            <h1>Login form</h1>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="text"
                                    className="login__input"

                                    id="name"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="User name / Email" />

                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password"
                                    className="login__input"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password"
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <button className="button login__submit">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>

                    </div>
                    <div className="screen__background">

                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
} export default RegisterScreen;