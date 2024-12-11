import React from "react";
import "./MyWork.css";
import myWorkData from "../../assets/myWorkData";

function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {myWorkData.map((work, index) => {
          return (
            <div className="work" key={index}>
              <img src={work.pic} alt={work.title} />
              <h2>{work.title}</h2>
            </div>
          );
        })}
        
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <p>Arrow</p>
      </div>
    </div>
  );
}

export default MyWork;
