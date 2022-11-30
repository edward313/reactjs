import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../actions/userActions.js'


import "../LoginScreen/style.css"
import { object } from 'prop-types'

function LoginScreen(prop) {

    const navigate = useNavigate();
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const userLogin = useSelector((state) => state.userLogin)

   
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    let location = useLocation()
  
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const { data } = user
    console.log()
    useEffect(() => {
        
        if(user.loading===false && user.userInfo.message == "Login successfully!" )
        {
            
            toast.success('Đăng nhập thành công ' , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",})
                
                
        } else {
            
        }

    }, [user])

    const submitHandler = (e) => {
        e.preventDefault()
        
        
        
    
        dispatch(login(username,password))
        
        
    }
    
    
    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div class="login-area">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<div class="login-content">
							<h2 class="login-title">Login</h2>
							<p>Hello,Welcome to your account</p>
							<div class="social-sign">
								<a href="#"><i class="fa fa-facebook"></i> Sign in with facebook</a>
								<a class="twitter" href="#"><i class="fa fa-twitter"></i> Sign in with twitter</a>
							</div>
							<form className="login" onSubmit={submitHandler}>
								<label>Email Address</label>
								<input
                                    type="text"
                                    className="login__input"

                                    id="name"
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="User name / Email" />
								<label>Password</label>
								<input type="password"
                                    className="login__input"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
								<div class="login-lost">
									<span class="log-rem">
										<input type="checkbox" />
										<label>Remember me!</label>
									</span>
									<span class="forgot-login">
										<a href="#">Forgot your password?</a>
									</span>
								</div>
								<input class="login-sub" type="submit" value="Login" />
                                
							</form>
                            <ToastContainer />
						</div>
					</div>
					
				</div>
			</div>
		</div>
        </Fragment>

    )
} export default LoginScreen;