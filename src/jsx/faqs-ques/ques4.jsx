import React from 'react';
import { Link } from 'react-router-dom';

function Ques4() {
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
                    <h1>How Can We Connect With An NGO?</h1>
                    <p>
                        Connecting with an NGO is an easy task on our website. It provides you with information about different
                        NGOs working in a specific state, including their address, official website, and areas of work.<br /><br />
                        To connect with an NGO, you can click on the “OUR PROGRAM” button at the top header:<br /><br />
                        <img src=" /ques4img1.png" alt="Our Program Button" /><br /><br />
                        When you click on "OUR PROGRAM," a new window of opportunity unfolds before you. You'll seamlessly
                        transition to a dedicated page meticulously designed to provide insight into our expansive network.
                        Here, you'll find an array of cities, each representing a nexus of impactful change.<br /><br />
                        <img src=" /ques4img2.png" alt="City Selection" /><br /><br />
                        With a simple click on any city that captures your curiosity, you're granted access to a rich reservoir
                        of information about the diverse NGOs diligently operating within its boundaries. This curated selection
                        offers a comprehensive overview of their missions, initiatives, and impact, empowering you to make
                        informed decisions about your engagement.<br /><br />
                        Moreover, facilitating seamless interaction, each NGO listing features a direct website link. This means
                        that with just a click, you can swiftly connect with these organizations, explore their work in-depth,
                        and potentially embark on collaborative endeavors or extend support to their causes.
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

export default Ques4;