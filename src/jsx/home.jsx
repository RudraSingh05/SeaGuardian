import React, { useEffect } from 'react';
import "../css/home.css";
import Header from '../common-component/header';
import Footer from '../common-component/footer';

function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Header />

      {/* Background Video Section */}
      <div className="background-video">
        <video autoPlay loop muted playsInline>
          <source src="/ocean.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <main className="main">
        <div className="container">
          <div className="panel-left">
            <h1>Give Today</h1>
            <h3>We couldn't do our marine conservation work without you.</h3>
          </div>

          <div id="about-us" className="mid">
            <h3>
              SeaGuardian is working with you to protect the ocean from India's greatest challenges.
            </h3>

            {/* Image Contribution Section */}
            <div className="slide-img">
              <div className="parallax-image parallax-image-01"></div>
              <section className="sec">
                <h2 className="about-us-h2">Join Us in Advocating for Cleaner Oceans: Share Your Photos</h2>
                <ul className="about-us-p">
                  <li><b>Raise Awareness:</b> Share images to raise awareness about marine pollution.</li>
                  <li><b>Inspire Action:</b> Encourage policymakers and individuals to take action.</li>
                  <li><b>Community Engagement:</b> Join a community dedicated to ocean conservation.</li>
                </ul>
                <b className="about-us-h2">How to contribute:</b>
                <ol className="about-us-p">
                  <li>Capture pictures of polluted marine areas.</li>
                  <li>
                    Submit on our
                    <a href="/action.html"><button className="about-us-btn">Take Action</button></a>.
                  </li>
                  <li>Privacy is respected; anonymity is an option.</li>
                </ol>
              </section>

              {/* Blog Contribution Section */}
              <div className="parallax-image parallax-image-02"></div>
              <section className="sec">
                <h2 className="about-us-h2">Share Your Insights: Contribute to Our Blog</h2>
                <ul className="about-us-p">
                  <li><b>Amplify Your Voice:</b> Influence positive change.</li>
                  <li><b>Educate and Inspire:</b> Share marine conservation knowledge.</li>
                  <li><b>Build a Community:</b> Connect with ocean sustainability advocates.</li>
                </ul>
                <b className="about-us-h2">How to contribute:</b>
                <ol className="about-us-p">
                  <li>
                    Submit your article via
                    <a href="/our-program"><button className="about-us-btn">Our Program</button></a>.
                  </li>
                  <li>Our editorial team will review your article.</li>
                  <li>Approved content will be featured on our blog.</li>
                </ol>
              </section>

              {/* Donation Section */}
              <div className="parallax-image parallax-image-03"></div>
              <section className="sec">
                <h2 className="about-us-h2">Support the Cause: Donate for Cleaner Oceans</h2>
                <ul className="about-us-p">
                  <li><b>Empower Change:</b> Donations help combat marine pollution.</li>
                  <li><b>Community Impact:</b> Every contribution strengthens our mission.</li>
                  <li><b>Initiative Growth:</b> Supports outreach and environmental efforts.</li>
                </ul>
                <b className="about-us-h2">How to donate:</b>
                <ol className="about-us-p">
                  <li>
                    Visit our
                    <a href="/donate"><button className="about-us-btn">Donate Page</button></a>.
                  </li>
                </ol>
              </section>
            </div>

            {/* Endangered Species Section */}
            <h1>It's Sad</h1>
            <div className="history">
              <div className="his-img">
                <img src="/historyimg.jpg" alt="Beluga Whale affected by pollution" />
              </div>
              <div className="his-p">
                <h4>~ Endangered</h4>
                <h2>Beluga Whales</h2>
                <p>
                  These creatures suffer due to ocean pollution. Dead belugas contain toxic chemicals.
                  <br />
                  <a href="/extinct.html" className="link1">Know More</a>
                </p>
              </div>
            </div>

            <div id="about-us" className="mid">
              <h3>
                SeaGuardian is working to protect oceans from India's challenges. <br />
                <a href="/details.html" className="link2">Know More</a>
              </h3>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
