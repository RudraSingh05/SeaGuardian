import React from 'react';
import "../../css/ques.css"
import { Link } from 'react-router-dom';

function Ques1() {
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
                    <h1>How To Donate?</h1>
                    <p>
                        Our website provides various functionalities, including a donation page. You can easily donate the
                        amount of money you wish to provide us with on the “DONATE” page. <br /><br />
                        To go to the donate page, you can follow either of the two steps:
                    </p>
                    <ol>
                        <li>
                            Either you can click on the “DONATE” button at the header. <br /><br />
                            <img src=" /ques1img1.png" alt="Donate button in header" />
                        </li>
                        <li>
                            You can go to the bottom of a page, where you will find the “DONATE” button. Click on it to get
                            forwarded to the donate page. <br /><br />
                            <img src=" /ques1img2.png" alt="Donate button at the bottom" />
                        </li>
                    </ol>
                    <p>
                        On the donate page, you will come across fields that you need to fill which include your personal
                        information and credit card credentials. After filling all the necessary information, you will get a
                        zip code. Enter the zip code and click on submit.
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

export default Ques1;