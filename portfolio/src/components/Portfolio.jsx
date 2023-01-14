import React from "react";
import SneakerPeak from "../assets/thumbnail/sneakerPeak.png";
import WeatherApplication from "../assets/thumbnail/weatherApp.png"
import FanZone from "../assets/thumbnail/fanZone.png"
import WorkDay from "../assets/thumbnail/workday.png"

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://safe-lake-28734.herokuapp.com/">
                {" "}
                <img
                  src={SneakerPeak}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Homepage with shoes"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>SneakerPeak</h4>
              <p>
              We are a social news lifestyle platform, content rating, and discussion website. 
              Registered users may submit content to the site such as links, text posts, images, and videos, 
              which are then voted up or down by other members. It is a place to find curated articles about fashion, 
              lifestyle and discuss different topics, it is a place for members to connect with one another.
              </p>
            </div>
          </div>
        </div> 

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://adeekollu.github.io/weather-application/">
                {" "}
                <img
                  src={WeatherApplication}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Homepage with shoes"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Application</h4>
              <p>
               5 Day weather dashboard when a city is choosen the current weather will show as well as the forecast for the next 5 days.
               Created using HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://giulia037.github.io/Fan-Zone/">
                {" "}
                <img
                  src={FanZone}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Homepage with shoes"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Fan Zone</h4>
              <p>
               A web application which provides sports wagering data for our users. 
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://adeekollu.github.io/todo-planner/">
                {" "}
                <img
                  src={WorkDay}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Homepage with shoes"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day</h4>
              <p>
               A daily planner to help organize to do's through out your day. Built with React.js and is able to 
               keep track of how many to do's remain as you can add to do's, toggle them when done and clear to do's.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://adeekollu.github.io/todo-planner/">
                {" "}
                <img
                  src={WorkDay}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Homepage with shoes"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day</h4>
              <p>
               A daily planner to help organize to do's through out your day. Built with React.js and is able to 
               keep track of how many to do's remain as you can add to do's, toggle them when done and clear to do's.
              </p>
            </div>
          </div>
        </div>
        
        </section>
    </div>
  );
}

export default Portfolio;