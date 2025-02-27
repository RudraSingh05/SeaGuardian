import React from 'react';
import Header from '../common-component/header';
import Footer from '../common-component/footer';
import { Link } from 'react-router-dom';
// import "../css/faqs.css"

function Faqs() {
    return (
        <>
            <Header/>

            <hr />

            <main>
                <div className="faq">
                    <div className="title">
                        <h2>Frequently Asked Questions (FAQs)</h2>
                        <hr style={{ marginTop: '25px' }} />
                    </div>
                    <div className="q_a">
                        <p><Link to="/ques1">How To Donate?</Link></p>
                        <p><Link to="/ques2">How To Register As An Individual?</Link></p>
                        <p><Link to="/ques3">How Can We Connect With An NGO?</Link></p>
                        <p><Link to="/ques4">How To Register As An NGO?</Link></p>
                        <p><Link to="/ques5">How To Report An Accident?</Link></p>
                    </div>
                </div>

                <section className="section__support" id="support">
                    <h3>Submit a Request</h3>
                    <p>Fill the form below to let us know about the problem you are facing.</p>
                    <form className="frm">
                        <div className="form__group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form__group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form__group">
                            <label htmlFor="problem">Problem:</label>
                            <select id="problem" name="problem" required>
                                <option value="">Select the option that you are facing the problem in</option>
                                <option value="problem1">Donation</option>
                                <option value="problem2">Registration</option>
                                <option value="problem3">Login</option>
                                <option value="problem4">NGOs links not working</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <label htmlFor="message">Description:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <div className="form__group">
                            <label htmlFor="attachment">Attachment:</label>
                            <input type="file" id="attachment" name="attachment" />
                        </div>
                        <input type="submit" className="sub__btn" value="Submit" />
                    </form>
                </section>

                <div className="thank-u">
                    <h1>Thank You For Visiting Us. Hope This Will Help You :)</h1>
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default Faqs;