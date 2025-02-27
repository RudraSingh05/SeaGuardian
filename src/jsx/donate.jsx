import React from 'react';
// import "../css/donate.css"

function Donate() {
    return (
        <>
            <div className="background-video">
                <video autoPlay loop muted playsInline>
                    <source src=" /action.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <header>
                <Link href="home.html">
                    <img src=" /SeaGuardian Logo.png" alt="Sea Guardian Logo" />
                </Link>
                <nav>
                    <ul>
                        <li><Link href="home.html">About Us</Link></li>
                        <li>< Link to="/our-program">Our Program</Link></li>
                        <li><Link href="action.html">Take Action</Link></li>
                    </ul>
                </nav>
                <div className="donate">
                    <li>< Link to="/the-latest">The Latest</Link></li>
                    < Link to="/login">
                        <button className="shadow__btn login">
                            Login
                        </button>
                    </Link>
                </div>
            </header>

            <main>
                <div className="container1">
                    <h1>YOUR IMPACT BEGINS TODAY</h1>
                    <p>Your generous contribution will immediately go to work supporting the things you care
                        passionately about. Whether it’s saving wildlife, protecting our ocean, empowering
                        the world’s most innovative scientists and explorers to help solve the
                        planet’s mysteries and challenges, or preserving our ancient heritage for future
                        generations—together we’ll help change the world.</p>

                    <h2>Your Gift Information</h2>

                    <h3>Type of gift:</h3>
                    <div className="type-of-gift">
                        <button>One-time gift</button>
                        <button>Monthly gift</button>
                    </div>
                    <div className="price">
                        <button>$35</button>
                        <button>$50</button>
                        <button>$100</button>
                        <button>$250</button>
                        <button>$1000</button>
                        <button>Other</button>
                    </div>

                    {/* Form for payment info */}
                    <form action="" className="payment_info">
                        <h2>PAYMENT INFORMATION</h2>

                        <h3>Payment Type:</h3>
                        <div className="pay-type">
                            <button>Credit Card</button>
                            <button>Paypal</button>
                        </div>

                        <div className="input-group">
                            <label className="label">Credit Card Number:</label>
                            <input type="text" className="input" />
                        </div>

                        <div className="input-group">
                            <label className="label">Credit Card Expiration:</label>
                            <div className="expiration-date">
                                <select className="select">
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select className="select">
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                </select>
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="label">Credit Card Security Code:</label>
                            <input type="number" className="input" />
                        </div>
                    </form>

                    {/* Form for billing info */}
                    <form className="billing_info">
                        <h2>BILLING INFORMATION</h2>
                        <div className="input-group">
                            <label className="label">Title:</label>
                            <select className="select">
                                <option value="">- Select -</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Miss">Miss</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Dr.">Dr.</option>
                                <option value="Drs.">Drs.</option>
                                <option value="Mr. and Mrs.">Mr. and Mrs.</option>
                                <option value="Mr. and Dr.">Mr. and Dr.</option>
                                <option value="Dr. and Mrs.">Dr. and Mrs.</option>
                                <option value="The Honorable">The Honorable</option>
                                <option value="Reverend">Reverend</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label className="label">First name:</label>
                            <input type="text" className="input" />
                        </div>

                        <div className="input-group">
                            <label className="label">Last name:</label>
                            <input type="text" className="input" />
                        </div>

                        <div className="input-group">
                            <label className="label">Email:</label>
                            <input type="email" className="input" />
                        </div>

                        <div className="radio-buttons-container">
                            <label className="label">Yes! Please send me National Geographic Society email updates.</label>
                            <div className="radio-button">
                                <input name="radio-group" id="radio2" className="radio-button__input" type="radio" />
                                <label htmlFor="radio2" className="radio-button__label">
                                    <span className="radio-button__custom"></span>
                                    Yes
                                </label>
                            </div>
                            <div className="radio-button">
                                <input name="radio-group" id="radio1" className="radio-button__input" type="radio" />
                                <label htmlFor="radio1" className="radio-button__label">
                                    <span className="radio-button__custom"></span>
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="input-group">
                            <label className="label">Address1:</label>
                            <input type="text" className="input" />
                        </div>

                        <div className="input-group">
                            <label className="label">Address2:</label>
                            <input type="text" className="input" />
                        </div>

                        <div className="input-group">
                            <label className="label">City:</label>
                            <input type="text" className="input" />
                        </div>

                        <div className="input-group">
                            <label className="label">State:</label>
                            <select className="select">
                                <option value="">- Select -</option>
                                {/* State options */}
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                {/* Add other states here */}
                                <option value="WY">Wyoming</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label className="label">Zip Code:</label>
                            <input type="number" className="input" />
                        </div>

                        <div className="donate-button">
                            <button className="donate1">DONATE NOW!</button>
                        </div>
                    </form>
                </div>
            </main>

            <footer>
                <div className="footer-wrapper">
                    <section className="footer-top">
                        <div className="footer-headline">
                            <h2>Donate to make Pollution Free Marine</h2>
                            <p>Stay up to date with our news and articles</p>
                        </div>
                        <div className="footer-subscribe">
                            < Link to="/donate">
                                <button id="donate">Donate</button>
                            </Link>
                        </div>
                    </section>
                    <div className="footer-columns">
                        <section className="footer-logo">
                            <img src=" /logo 1.png" alt="SeaGuardian Logo" />
                        </section>
                        <section>
                            <h3>Product</h3>
                            <ul>
                                <li><Link href="action.html" title="API">Take Action</Link></li>
                                <li>< Link to="/donate" title="Pricing">Donation</Link></li>
                            </ul>
                        </section>
                        <section>
                            <h3>Resources</h3>
                            <ul>
                                <li>< Link to="/the-latest" title="Support">Latest Works</Link></li>
                                <li>< Link to="/our-program" title="Sitemap">Our Programs</Link></li>
                                <li><Link href="./FAQs.html" title="Sitemap">FAQs</Link></li>
                            </ul>
                        </section>
                    </div>
                    <div className="footer-bottom">
                        <small>© SeaGuardian <span id="year"></span>, All rights reserved</small>
                        <span className='social-links'>
                            <Link href="#" title="Instagram">
                                <img src=" /instagram.svg" alt='Instagram' />
                            </Link>
                            <Link href="#" title="Linkedin">
                                <img src=" /linkedin.svg" alt='Linkedin' />
                            </Link>
                            <Link href="#" title="Twitter">
                                <img src=" /twitter.svg" alt='Twitter' />
                            </Link>
                            <Link href="#" title="Youtube">
                                <img src=" /youtube.svg" alt='YouTube' />
                            </Link>
                            <Link href="#" title="GitHub">
                                <img src=" /github.svg" alt='GitHub' />
                            </Link>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Donate;
