import React, { useState } from 'react';
import './index.css';

import IconFacebook from '../../image/login/icon-facebook.png';
import IconMail from '../../image/login/icon-mail.png';
import IconPhone from '../../image/login/icon-phone.png';

export default function Login() {
    const [isLoginForm, setIsLoginForm] = useState(true);

    const handleLoginClick = () => {
        setIsLoginForm(true);
    };

    const handleSignupClick = () => {
        setIsLoginForm(false);
    };

    return (
        <div className="wrapper">
            <div className="title-text">
                <div className={`title ${isLoginForm ? 'login' : ''}`}>Login Form</div>
                <div className={`title ${!isLoginForm ? 'signup' : ''}`}>Signup Form</div>
            </div>
            <div className="form-container">
                <div className="slide-controls">
                    <input type="radio" name="slide" id="login" checked={isLoginForm} onChange={handleLoginClick} />
                    <input type="radio" name="slide" id="signup" checked={!isLoginForm} onChange={handleSignupClick} />
                    <label htmlFor="login" className={`slide login`}>Login</label>
                    <label htmlFor="signup" className={`slide signup`}>Signup</label>
                    <div className="slider-tab"></div>
                </div>

                <div>
                    <div className='form-extension'>
                        <div>
                            <img src={IconFacebook} />
                        </div>
                        <div>
                            <img src={IconMail} />
                        </div>
                        <div>
                            <img src={IconPhone} />
                        </div>

                    </div>
                    <div className='note-extension'>
                        <hr/>
                        <p>Sign In with</p>
                    </div>
                </div>

                <div className="form-inner">
                    {isLoginForm ? (
                        <form action="#" className="login">
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="pass-link"><a href="#">Forgot password?</a></div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
                        </form>
                    ) : (
                        <form action="#" className="signup">
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Full Name" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password" required />
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup" />
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
