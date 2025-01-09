import React, { useContext } from "react";
import "./MyWork.css";
import myWorkData from "../../assets/myWorkData";
import MenuContext from "../../contexts/MenuContext";

function MyWork() {
  const { setMenu } = useContext(MenuContext);
  return (
    <div id="work" className="mywork" onMouseEnter={() => setMenu("work")}>
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
      </div>
    </div>
  );
}

export default MyWork;
