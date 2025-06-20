import "./right.css";
import React from "react";
import profile from "./assets/john.png";
import Graph from "./assets/Graph.png";
import Community from "./assets/Community.png";
import Schedule from "./assets/Schedule.png";
import study from "./assets/study.png";

const Right = () => {
  return (
    <>
      <div className="holder">
        <div>
          <button className="profile">
            <img src={profile} alt="Profile" />
          </button>
          <div className="details">
            <h1 id="name">John Sigh</h1>
            <p id="designation">Software Engineer</p>
            <p id="location">New York, USA</p>
          </div>
        </div>

        <div className="Pogress">
          <div className="heights">
            <h4>Member Since</h4> <h4 id="Memeber_since"> jan 2004</h4>
          </div>
          <div className="heights">
            <h4>Total Tests</h4> <h4 id="Total_Tests">123</h4>
          </div>
          <div className="heights">
            <h4>Best Score</h4> <h4 id="Best_Score">387/400 </h4>
          </div>
        </div>
      </div>

      <div className="Actions">
        <h1>Actions</h1>
        <div className="heights">
          <div className="image">
            <img src={Graph} alt="Graph" />
          </div>{" "}
          <button id="Graph" className = "btn">Study Graphs</button> <h3>&gt;</h3>
        </div>
        <div className="heights">
          <div className="image">
            <img src={Schedule} alt="Graph" />
          </div>{" "}
          <button id="Schedule" className ="btn">Schedule Test</button> <h3>&gt;</h3>
        </div>
        <div className="heights">
          <div className="image">
            <img src={Community} alt="Graph" />
          </div>{" "}
          <button id="Community" className = "btn">Compare with Peers</button> <h3>&gt;</h3>
        </div>
        <div className="heights">
          <div className="image">
            <img src={study} alt="study" />
          </div>{" "}
          <button id="study"  className = "btn">Learning Resources</button> <h3>&gt;</h3>
        </div>
      </div>
    </>
  );
};
export default Right;
