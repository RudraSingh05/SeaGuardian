import React from 'react';
import { Link } from 'react-router-dom';

function Ques5() {
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
                    <h1>How To Report An Accident?</h1>
                    <p>
                        To initiate the reporting process for an incident, please locate and click on the prominent "Take Action" button situated at the uppermost section of the page. <br /><br />
                        <img src=" /ques5img1.png" alt="Take Action Button" /><br /><br />
                        After clicking on the "Take Action" button, you'll find yourself on a dedicated page designed specifically for reporting incidents. Your first step is to provide your personal credentials to ensure accuracy and follow-up. This includes essential details such as your full name, date of birth, residential address, contact number, and email address.<br /><br />
                        Next, you'll be prompted to describe the location of the incident in detail. This should include specifics such as the address or nearby landmarks to pinpoint the exact area. Additionally, you'll need to specify the type of pollution observed, whether it's air, water, or land pollution, and provide a brief description of the situation.<br /><br />
                        To enhance the report and provide clearer understanding, you'll also have the option to attach an image related to the incident. This could be a photo showcasing the pollution, the affected area, or any other relevant visuals that support your report.<br /><br />
                        <img src=" /ques5img2.png" alt="Incident Report Form" /><br /><br />
                        Once you've completed filling in all the required information, simply proceed by clicking on the "SUBMIT →" button to formally file the incident report. Your action will greatly assist us in promptly addressing and resolving the issue at hand. Thank you for taking the time to bring this matter to our attention.<br /><br />
                        <img src=" /ques5img3.png" alt="Submit Button" />
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

export default Ques5;
