import React from 'react';
import { Link } from 'react-router-dom';

function Ques2() {
    return (
        <>
            <header>
                < Link to="/faqs">Go Back To FAQs</Link>
            </header>
            <hr />
            <main>
                <div className="left">
                    <h3 style={{ fontSize: '30px' }}>Articles in this section</h3>
                    <div className="article">
                    <ul>
                            <li><Link to="/ques1">How To Donate?</Link></li>
                            <li><Link to="/ques2">How To Register As An Individual?</Link></li>
                            <li><Link to="/ques3">How To Register As An NGO?</Link></li>
                            <li><Link to="/ques4">How Can We Connect With An NGO?</Link></li>
                            <li><Link to="/ques5">How To Report An Accident?</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="right">
                    <h1>How To Register As An Individual?</h1>
                    <p>
                        Registering as an individual means you can get the facility to donate to different NGOs as per your
                        desire. <br /><br />
                        To register as an individual, click on the “LOGIN” button at the top of the page. <br /><br />
                        <img src=" /ques2img1.png" alt="Login button" style={{ height: '3.5in', border: '1px solid black' }} /> <br /><br />
                        Upon initiating the login process by clicking the designated button, users are prompted to input their
                        designated username and password. Subsequently, a unique OTP (One-Time Password) is automatically
                        generated and dispatched to the email address linked with the respective account. This pivotal security
                        measure serves to authenticate user identity, ensuring that only authorized individuals gain entry to
                        their accounts. <br /><br />

                        Upon reception of the OTP, users are required to input the provided code to validate their login
                        attempt. This stringent verification mechanism fortifies account security, thwarting unauthorized access
                        attempts effectively. <br /><br />

                        Following successful OTP validation, user accounts are promptly established on our platform, thereby
                        endowing individuals with comprehensive access to its myriad features and functionalities. <br /><br />

                        Alternatively, for expedited access, users have the option to opt for the utilization of their existing
                        Google credentials to facilitate seamless login. <br /><br />
                    </p>
                    <ol>
                        <li>
                            If you are a new user, click on the “CREATE ACCOUNT” button present at the bottom of the page. <br />
                            <img src=" /ques2img2.png" alt="Create Account button" />
                        </li>
                        <li>
                            If you forgot your password, click on “RESET PASSWORD” present at the bottom right of the page. <br />
                            <img src=" /ques2img3.png" alt="Reset Password button" />
                        </li>
                    </ol>
                </div>
            </main>
            <hr />
            <footer>
                Copyright &copy; SeaGuardian, 2024
            </footer>
        </>
    );
}

export default Ques2;
