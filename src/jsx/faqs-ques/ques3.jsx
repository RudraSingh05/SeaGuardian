import React from 'react';
import { Link } from 'react-router-dom';

function Ques3() {
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
                    <h1>How To Register As An NGO?</h1>
                    <p>
                        By registering as an NGO, you can be provided with the facility to ask for funding from our users and
                        also get a chance to be spotlighted on our website. <br /><br />
                        To register as an NGO, click on the “LOGIN” button at the top header of the website: <br /><br />
                        <img src=" /ques3img1.png" alt="Login Button" /><br /><br />
                        You will be directed to a “login” page for individuals. To register as an NGO, click on the “Register Here”
                        link at the bottom right corner of the page. <br /><br />
                        <img src=" /ques3img2.png" alt="Register Here Link" /><br /><br />
                        After clicking on “Register Here,” you will be directed to a page where you need to fill in some information
                        about the NGO, including the registration number provided to the NGO. After filling in the necessary
                        details, click on the “SUBMIT” button to complete the registration process.
                    </p>
                </div>
            </main>
            <hr />
            <footer>
                Copyright &copy; SeaGuardian, 2024
            </footer>
        </>
    );
}

export default Ques3;