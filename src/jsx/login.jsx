import React, { useState } from 'react';
// import '../css/login.css';

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePasswordToggle = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div id="loginForm">
            <div className="centering">
                <form className="my-form" onSubmit={handleSubmit}>
                    <div className="login-welcome-row">
                        <h1>LogIn</h1>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            aria-label="Email"
                            type="email"
                            id="email"
                            className="LoginEmail"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <img alt="Email Icon" className="input-icon" title="Email Icon" src=" /email.svg" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            className="LoginPassword"
                            type={passwordVisible ? 'text' : 'password'}
                            aria-label="Password"
                            name="password"
                            title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                        <button
                            type="button"
                            title="Reveal Password"
                            aria-pressed={passwordVisible}
                            onClick={handlePasswordToggle}
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <mask id="eye-open">
                                        <path
                                            d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12V20H12H1V12Z"
                                            fill="white"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinejoin="round"
                                        />
                                    </mask>
                                    <mask id="eye-closed">
                                        <path
                                            d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12V20H12H1V12Z"
                                            fill="#D9D9D9"
                                        />
                                    </mask>
                                </defs>
                                <path
                                    className="lid lid--upper"
                                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className="lid lid--lower"
                                    d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <g mask="url(#eye-open)">
                                    <g className="eye">
                                        <circle cy="12" cx="12" r="4" fill="white" stroke="white" strokeWidth="2" />
                                        <circle cy="11" cx="13" r="1" fill="black" />
                                    </g>
                                </g>
                            </svg>
                            <span className="sr-only">Reveal</span>
                        </button>
                    </div>
                    <div>
                        <button className="bubbly-button" id="Login-button" type="submit">LogIn</button>
                    </div>
                    <div className="my-form__row">
                        <span>Forgot your password? </span>
                        <Link href="reset-pass.html" title="Reset Password">Reset Password</Link>
                    </div>
                    <div className="my-form__row2">
                        <span>If you are an NGO</span>
                        <Link href="ngo-register.html" title="Register Here">Register Here</Link>
                    </div>
                    <div className="my-form__signup">
                        <Link href="signup.html" title="Create Account">Create Account</Link>
                    </div>
                    <div className="social-media-buttons">
                        <span className="social-media-button">
                            <img className="GoogleLogin" alt="Google" src=" /google.svg" />
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;