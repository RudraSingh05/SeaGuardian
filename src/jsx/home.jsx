import React from 'react';
import "../css/home.css";
import Header from '../common-component/header';
import Footer from '../common-component/footer';

function Home() {
  return (
    <>
      <Header />
      
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
            <div className="slide-img">
              <div className="parallax-image parallax-image-01"></div>
              <section className="sec">
                <h2 className="about-us-h2">
                  Join Us in Advocating for Cleaner Oceans: Share Your Photos
                  <br />Why contribute?
                </h2>
                <ul className="about-us-p">
                  <li>
                    <b>Raise Awareness:</b> Your pictures will contribute to a collective effort to raise awareness about the impact of marine pollution on our oceans and marine life.
                  </li>
                  <li>
                    <b>Inspire Action:</b> By sharing visual evidence, we aim to inspire individuals, communities, and policymakers to take meaningful steps towards a cleaner and healthier ocean environment.
                  </li>
                  <li>
                    <b>Community Engagement:</b> Join a community of like-minded individuals who are passionate about environmental conservation and share a commitment to making a difference.
                  </li>
                </ul>
                <b className="about-us-h2">How to contribute:</b>
                <ol className="about-us-p">
                  <li>Capture pictures of polluted marine areas in your local vicinity.</li>
                  <li>
                    Visit our
                    <a href="action.html"><button className="about-us-btn">Take Action</button></a>
                    to submit your photos securely.
                  </li>
                  <li>Rest assured, your privacy will be respected, and you can choose to remain anonymous if preferred.</li>
                </ol>
              </section>

              <div className="parallax-image parallax-image-02"></div>
              <section className="sec">
                <h2 className="about-us-h2">
                  Share Your Insights: Contribute to Our Blog <br />
                  Why contribute to our blog?
                </h2>
                <ul className="about-us-p">
                  <li>
                    <b>Amplify Your Voice:</b> Your unique perspective and insights can help amplify the collective voice advocating for cleaner oceans and sustainable practices.
                  </li>
                  <li>
                    <b>Educate and Inspire:</b> Share your knowledge, experiences, and passion for marine conservation to inspire others.
                  </li>
                  <li>
                    <b>Build a Community:</b> Join a community of writers, researchers, and advocates who are passionate about marine conservation.
                  </li>
                </ul>
                <b className="about-us-h2">How to contribute:</b>
                <ol className="about-us-p">
                  <li>
                    Submit your article or content idea to
                    <a to="/our-program"><button className="about-us-btn">Our Program</button></a>.
                  </li>
                  <li>Our editorial team will review and provide feedback.</li>
                  <li>Your contribution will be featured on our blog.</li>
                </ol>
              </section>

              <div className="parallax-image parallax-image-03"></div>
              <section className="sec">
                <h2 className="about-us-h2">
                  Support the Cause: Donate to Make a Difference for Our Oceans
                  <br />
                  Why donate?
                </h2>
                <ul className="about-us-p">
                  <li>
                    <b>Empower Change:</b> Your financial support helps raise awareness about marine pollution.
                  </li>
                  <li>
                    <b>Community Impact:</b> Every contribution, no matter the size, helps build a stronger community.
                  </li>
                  <li>
                    <b>Initiative Growth:</b> With your generosity, we can expand our outreach and collaborate with environmental experts.
                  </li>
                </ul>
                <b className="about-us-h2">How to donate:</b>
                <ol className="about-us-p">
                  <li>
                    Visit our
                    < a to="/donate"><button className="about-us-btn">Donate Page</button></a>.
                  </li>
                </ol>
              </section>
            </div>

            <h1>Its Sad</h1>
            <div className="history">
              <div className="his-img">
                <img src="/historyimg.jpg" alt="" />
              </div>
              <div className="his-p">
                <h4>~ Endangered</h4>
                <h2>Beluga Whales</h2>
                <p>
                  These amazing creatures are heavily affected by ocean pollution. Dead beluga whales are often found with high levels of toxic chemicals.
                  <br />
                  <a href="./extinct.html" className="link1">Know More</a>
                </p>
              </div>
            </div>
            <div id="about-us" className="mid">
              <h3>
                SeaGuardian is working with you to protect the ocean from India's greatest challenges. <br />
                <a href="./details.html" className="link2">Know More</a>
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