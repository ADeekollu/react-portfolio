import React from "react";
import profileImage from "../assets/porfilePic/profile.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          Hello, my name is Ankith Deekollu.  
          I have a B.A in Accounting and Finance from the University of South Wales.
          I am currently working as a Project Manager at Mass Technologies, a business solutions consulting firm. 
          I have recently finished a Full Stack developer bootcamp from The Ohio State University where I am looking to enter into the tech industry with my new found skills.
          When I am not working, I like to play tennis, go rock climbing, and hiking on some trails in our local state parks.
          I love volunteering and giving my time back to the community and making the world a better place whether it is at my church or at the homeless shelter. 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;